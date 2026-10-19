import os
import sqlite3
from datetime import datetime
from typing import List, Optional
from fastapi import FastAPI, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel, EmailStr, Field

from dotenv import load_dotenv

# Load environment configuration from root or local .env
BASE_DIR = os.path.dirname(__file__)
ROOT_DIR = os.path.abspath(os.path.join(BASE_DIR, ".."))
load_dotenv(os.path.join(ROOT_DIR, ".env"))
load_dotenv(os.path.join(BASE_DIR, ".env"))

# Environment variables with zero hardcoding
PANDIT_WHATSAPP = os.getenv("PANDIT_WHATSAPP", os.getenv("VITE_WHATSAPP_NUMBER", "917024184846"))
PANDIT_PHONE = os.getenv("PANDIT_PHONE", os.getenv("VITE_PHONE_NUMBER", "7024184846"))
PANDIT_EMAIL = os.getenv("PANDIT_EMAIL", os.getenv("VITE_EMAIL", "tarunpuri.goswami@gmail.com"))
WEBSITE_NAME = os.getenv("WEBSITE_NAME", os.getenv("VITE_WEBSITE_NAME", "Mangalbhatpujaujjain.in"))
CORS_ORIGINS = [orig.strip() for orig in os.getenv("CORS_ORIGINS", "*").split(",") if orig.strip()]

# Ensure data directory exists
DB_DIR = os.path.join(BASE_DIR, "data")
os.makedirs(DB_DIR, exist_ok=True)
DB_PATH = os.getenv("DATABASE_PATH", os.path.join(DB_DIR, "mangalbhat.db"))

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        puja_name TEXT NOT NULL,
        gotra TEXT,
        preferred_date TEXT,
        city TEXT,
        special_request TEXT,
        status TEXT DEFAULT 'Pending',
        created_at TEXT NOT NULL
    )
    """)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS kundali_inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        dob TEXT,
        tob TEXT,
        pob TEXT,
        focus_areas TEXT,
        notes TEXT,
        created_at TEXT NOT NULL
    )
    """)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT,
        subject TEXT,
        message TEXT NOT NULL,
        created_at TEXT NOT NULL
    )
    """)
    conn.commit()
    conn.close()

init_db()

app = FastAPI(
    title="Mangal Bhat Puja Ujjain API",
    description="Official API for Pandit Tarun Puri Goswami - Spiritual Pujas & Jyotish Services, Ujjain",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Models
class BookingCreate(BaseModel):
    name: str = Field(..., min_length=2, example="राकेश शर्मा")
    phone: str = Field(..., min_length=10, example="7024184846")
    email: Optional[str] = Field(None, example="user@example.com")
    puja_name: str = Field(..., example="मंगल दोष पूजा (मंगल भात पूजन)")
    gotra: Optional[str] = Field(None, example="कश्यप गोत्र")
    preferred_date: Optional[str] = Field(None, example="2026-11-05")
    city: Optional[str] = Field(None, example="इंदौर, मध्य प्रदेश")
    special_request: Optional[str] = Field(None, example="शीघ्र विवाह एवं मंगल दोष शांति हेतु")

class KundaliInquiryCreate(BaseModel):
    name: str = Field(..., min_length=2)
    phone: str = Field(..., min_length=10)
    dob: Optional[str] = None
    tob: Optional[str] = None
    pob: Optional[str] = None
    focus_areas: Optional[List[str]] = []
    notes: Optional[str] = None

class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=2)
    phone: str = Field(..., min_length=10)
    email: Optional[str] = None
    subject: Optional[str] = None
    message: str = Field(..., min_length=5)

PANDIT_PROFILE = {
    "website_name": "Mangalbhatpujaujjain.in",
    "pandit_name": "Pandit Tarun Puri Goswami",
    "pandit_name_hi": "पंडित तरुण पूरी गोस्वामी",
    "title": "Jyotish & Vastu Specialist",
    "title_hi": "ज्योतिष एवं वास्तु विशेषज्ञ",
    "location": "Ujjain, Madhya Pradesh",
    "location_hi": "उज्जैन, मध्य प्रदेश (महाकाल की पावन नगरी)",
    "phone": "7024184846",
    "whatsapp": "7024184846",
    "email": "tarunpuri.goswami@gmail.com",
    "experience_years": "15+",
    "completed_pujas": "5000+",
    "vedic_authenticity": "100% वैदिक विधि-विधान",
    "satisfied_families": "सैकड़ों संतुष्ट परिवार",
    "about_bio_hi": "मैं पंडित तरुण पूरी गोस्वामी जी, विगत कई वर्षों से उज्जैन में रहकर ज्योतिष, वास्तु एवं वैदिक कर्मकांड के क्षेत्र में कार्य कर रहा हूँ। जन्म कुंडली विश्लेषण, वास्तु दोष निवारण, गृह शांति, यज्ञ, अनुष्ठान, मंत्र जप आदि के माध्यम से जीवन में सकारात्मक ऊर्जा, सुख-समृद्धि और शांति का मार्ग प्रदान करता हूँ।",
    "about_bio_en": "I am Pandit Tarun Puri Goswami, serving devotees for over 15 years in Ujjain in the field of Vedic Karmakand, Astrology, and Vastu. We conduct sacred Mangal Bhat Puja, Kaal Sarp Dosh Nivaran, Rudrabhishek, Mahamrityunjaya, and Kundali analysis strictly according to authentic Vedic scriptures."
}

SERVICES_DATA = {
    "top_services": [
        {
            "id": "mangal-dosh-puja",
            "name_hi": "मंगल दोष पूजा (मंगल भात पूजन)",
            "name_en": "Mangal Dosh Bhat Puja",
            "subtitle_hi": "उज्जैन मंगलनाथ मंदिर में मंगल दोष एवं अंगारक योग निवारण",
            "category": "विशेष दोष निवारण",
            "image": "/images/mangal_bhat.jpg",
            "description_hi": "उज्जैन को मंगल ग्रह की जन्मभूमि माना जाता है। मंगलनाथ मंदिर में विधिपूर्वक भात (उबले हुए चावल) से भगवान शिव का अभिषेक कर मंगल दोष, विवाह विलंब, रक्त विकार और दांपत्य कलह से मुक्ति मिलती है।",
            "benefits": [
                "शीघ्र एवं उत्तम विवाह योग",
                "दांपत्य जीवन में सुख और प्रेम",
                "भूमि, भवन, संपत्ति संबंधित लाभ",
                "क्रोध नियंत्रण एवं मानसिक शांति"
            ],
            "popular": True
        },
        {
            "id": "kalsarp-dosh-puja",
            "name_hi": "काल सर्प दोष पूजा",
            "name_en": "Kaal Sarp Dosh Puja",
            "subtitle_hi": "सभी प्रकार के 12 कालसर्प योगों का शास्त्रोक्त निवारण",
            "category": "दोष शांति",
            "image": "/images/kalsarp.jpg",
            "description_hi": "राहु-केतु के मध्य सभी ग्रहों के आ जाने से बनने वाले कालसर्प दोष से जीवन में हर काम में रुकावटें, व्यापार में घाटा और अशांति रहती है। उज्जैन में नाग देवता और शिव आराधना से इसका पूर्ण शमन होता है।",
            "benefits": [
                "कार्यों में आने वाली रुकावटें दूर",
                "व्यापार और नौकरी में अभूतपूर्व प्रगति",
                "मानसिक तनाव और बुरे सपनों से मुक्ति",
                "वंश वृद्धि और पारिवारिक सुख"
            ],
            "popular": True
        },
        {
            "id": "mahamrityunjaya-anushthan",
            "name_hi": "महामृत्युंजय अनुष्ठान",
            "name_en": "Maha Mrityunjaya Anushthan",
            "subtitle_hi": "अकाल मृत्यु निवारण, असाध्य रोग मुक्ति एवं दीर्घायु हेतु",
            "category": "वैदिक अनुष्ठान",
            "image": "/images/mahamrityunjaya.jpg",
            "description_hi": "भगवान शिव के सवा लाख महामृत्युंजय मंत्र जप एवं दशांश हवन द्वारा अकाल मृत्यु का भय, गंभीर बीमारियां और ग्रह पीड़ाएं तत्काल शांत होती हैं।",
            "benefits": [
                "दीर्घायु और स्वास्थ्य लाभ",
                "अकाल मृत्यु योग का निवारण",
                "ग्रह बाधा और शनि की साढ़ेसाती में रक्षा",
                "असीम आत्मबल और आत्मशांति"
            ],
            "popular": True
        },
        {
            "id": "rudrabhishek",
            "name_hi": "रुद्र अभिषेक",
            "name_en": "Maha Rudrabhishek",
            "subtitle_hi": "महाकाल की नगरी में संकटों से मुक्ति हेतु विशेष अभिषेक",
            "category": "शिव आराधना",
            "image": "/images/rudrabhishek.jpg",
            "description_hi": "दूध, दही, शहद, घी, शक्कर (पंचामृत), गंगाजल, गन्ने के रस और बेलपत्र से भगवान भोलेनाथ का सस्वर रुद्राष्टाध्यायी पाठ द्वारा अभिषेक।",
            "benefits": [
                "समस्त पापों और कष्टों का क्षय",
                "मनोकामनाओं की शीघ्र पूर्ति",
                "घर में सुख, शांति और समृद्धि",
                "नकारात्मक शक्तियों का नाश"
            ],
            "popular": True
        },
        {
            "id": "kundali-vishleshan",
            "name_hi": "कुण्डली विश्लेषण",
            "name_en": "Complete Kundali Analysis",
            "subtitle_hi": "जीवन के 7 प्रमुख स्तंभों का सटीक वैदिक ज्योतिषीय विश्लेषण",
            "category": "ज्योतिष परामर्श",
            "image": "/images/kundali.jpg",
            "aspects": [
                {"icon": "💰", "label_hi": "धन", "desc_hi": "आर्थिक स्थिरता, धन आगमन योग, ऋण मुक्ति"},
                {"icon": "❤️", "label_hi": "प्रेम", "desc_hi": "प्रेम संबंध, अनुकूलता, साथी का सहयोग"},
                {"icon": "📈", "label_hi": "व्यवसाय", "desc_hi": "व्यापार में वृद्धि, नया स्टार्टअप, लाभ के क्षेत्र"},
                {"icon": "🏥", "label_hi": "स्वास्थ्य", "desc_hi": "रोग निवारण, दीर्घायु, शारीरिक ऊर्जा"},
                {"icon": "👨‍👩‍👧‍👦", "label_hi": "परिवार", "desc_hi": "पारिवारिक सामंजस्य, संतान सुख, शांति"},
                {"icon": "💼", "label_hi": "करियर", "desc_hi": "नौकरी, पदोन्नति, सरकारी नौकरी के योग"},
                {"icon": "💍", "label_hi": "विवाह", "desc_hi": "विवाह में आ रही बाधाएं, गुण मिलान, दांपत्य"}
            ],
            "popular": True
        }
    ],
    "hawan_and_special_pujas": [
        {"id": "baglamukhi-hawan", "name_hi": "मां बगलामुखी हवन", "purpose_hi": "शत्रुओं पर विजय, अचल सुरक्षा एवं तंत्र रक्षा", "image": "/images/baglamukhi.jpg"},
        {"id": "rajnitik-safalta", "name_hi": "राजनीतिक सफलता अनुष्ठान", "purpose_hi": "पद, प्रतिष्ठा, जनसमर्थन और चुनाव में विजय"},
        {"id": "santan-sukh", "name_hi": "संतान सुख की प्राप्ति अनुष्ठान", "purpose_hi": "संतान प्राप्ति में बाधा निवारण एवं दीर्घायु संतान"},
        {"id": "tantra-badha", "name_hi": "तंत्र-बाधा से मुक्ति", "purpose_hi": "बुरी नजर, ऊपरी बाधा एवं नकारात्मक ऊर्जा का नाश"},
        {"id": "shatru-badha", "name_hi": "शत्रु-बाधा निवारण", "purpose_hi": "गुप्त एवं प्रत्यक्ष विरोधियों के षड्यंत्रों से सुरक्षा"},
        {"id": "vyapar-suraksha", "name_hi": "व्यापार सुरक्षा कवच", "purpose_hi": "व्यापार में नजर दोष एवं अचानक हानि से पूर्ण रक्षा"},
        {"id": "vyapar-vriddhi", "name_hi": "व्यापार वृद्धि महालक्ष्मी अनुष्ठान", "purpose_hi": "ग्राहकों की वृद्धि एवं निरंतर आर्थिक उन्नति"},
        {"id": "prem-vivah", "name_hi": "प्रेम व विवाह संबंध समाधान", "purpose_hi": "प्रेम विवाह में परिवार की सहमति एवं मधुर संबंध"},
        {"id": "court-case", "name_hi": "कोर्ट केस में विजय अनुष्ठान", "purpose_hi": "न्यायालयीन विवादों एवं मुकदमों में अनुकूल परिणाम"},
        {"id": "vivah-badha", "name_hi": "विवाह बाधा निवारण पूजा", "purpose_hi": "मांगलिक दोष, गुरु चांडाल दोष अथवा देरी का निवारण"},
        {"id": "rin-mukti", "name_hi": "ऋण-मुक्ति ऋणमोचक पूजा", "purpose_hi": "कर्ज से मुक्ति एवं आर्थिक स्वतंत्रता की प्राप्ति"},
        {"id": "lakshmi-prapti", "name_hi": "लक्ष्मी की प्राप्ति श्री सूक्त हवन", "purpose_hi": "स्थिर लक्ष्मी, धन वर्षा एवं दरिद्रता का समूल नाश"}
    ],
    "traditional_categories": [
        {"name_hi": "कुण्डली विश्लेषण", "icon": "scroll"},
        {"name_hi": "ज्योतिष परामर्श", "icon": "star"},
        {"name_hi": "वास्तु परामर्श", "icon": "compass"},
        {"name_hi": "यज्ञ एवं अनुष्ठान", "icon": "flame"},
        {"name_hi": "गृह वास्तु पूजा", "icon": "home"},
        {"name_hi": "मूर्ति प्राण प्रतिष्ठा", "icon": "temple"},
        {"name_hi": "नवचंडी अनुष्ठान", "icon": "shield"},
        {"name_hi": "शिवशक्ति अनुष्ठान", "icon": "sparkles"},
        {"name_hi": "मंगल भात पूजन", "icon": "sun"},
        {"name_hi": "काल सर्प पूजा", "icon": "infinity"},
        {"name_hi": "गुरु चांडाल दोष पूजा", "icon": "orbit"},
        {"name_hi": "नवग्रह शांति", "icon": "planet"},
        {"name_hi": "अर्क विवाह एवं कुंभ विवाह", "icon": "rings"},
        {"name_hi": "रत्न एवं रुद्राक्ष परामर्श", "icon": "gem"},
        {"name_hi": "सभी प्रकार की पूजा-पाठ", "icon": "flower"}
    ]
}

GALLERY_IMAGES = [
    {
        "id": 1,
        "title_hi": "उज्जैन मंगलनाथ मंदिर में मंगल भात पूजन",
        "category": "मंगल दोष पूजा",
        "image": "/images/mangal_bhat.jpg"
    },
    {
        "id": 2,
        "title_hi": "काल सर्प दोष निवारण महापूजन",
        "category": "काल सर्प पूजा",
        "image": "/images/kalsarp.jpg"
    },
    {
        "id": 3,
        "title_hi": "महामृत्युंजय वैदिक महायज्ञ एवं दशांश हवन",
        "category": "वैदिक अनुष्ठान",
        "image": "/images/mahamrityunjaya.jpg"
    },
    {
        "id": 4,
        "title_hi": "भगवान महाकालेश्वर का दिव्य रुद्राभिषेक",
        "category": "शिव आराधना",
        "image": "/images/rudrabhishek.jpg"
    },
    {
        "id": 5,
        "title_hi": "मां बगलामुखी पीताम्बरी तांत्रिक हवन",
        "category": "शत्रु निवारण",
        "image": "/images/baglamukhi.jpg"
    },
    {
        "id": 6,
        "title_hi": "नवग्रह शांति एवं गृह प्रवेश वास्तु वेदी",
        "category": "वास्तु एवं नवग्रह",
        "image": "/images/navgrah_vastu.jpg"
    },
    {
        "id": 7,
        "title_hi": "जन्म कुण्डली परामर्श एवं ग्रह स्थिति विवेचन",
        "category": "ज्योतिष परामर्श",
        "image": "/images/kundali.jpg"
    },
    {
        "id": 8,
        "title_hi": "महाकाल नगरी उज्जैन क्षिप्रा तट आरती दर्शन",
        "category": "उज्जैन दर्शन",
        "image": "/images/mahakal_bg.jpg"
    }
]

TESTIMONIALS = [
    {
        "name": "अनिल त्रिवेदी",
        "city": "अहमदाबाद, गुजरात",
        "review": "मेरी पुत्री के विवाह में मंगल दोष के कारण 4 साल से रुकावट आ रही थी। पंडित तरुण पूरी गोस्वामी जी से मंगलनाथ मंदिर में भात पूजा करवाई, 4 महीने के अंदर विवाह तय हो गया। पंडित जी का विधि-विधान अद्भुत है।",
        "rating": 5,
        "puja": "मंगल भात पूजन"
    },
    {
        "name": "संजय चौहान",
        "city": "दिल्ली",
        "review": "व्यापार में लगातार नुकसान हो रहा था। पंडित जी ने कालसर्प दोष की पूजा करवाई और महामृत्युंजय अनुष्ठान कराया। अब व्यापार में बहुत अच्छी वृद्धि है और परिवार में शांति है। हर-हर महादेव!",
        "rating": 5,
        "puja": "काल सर्प दोष निवारण"
    },
    {
        "name": "विशाल वर्मा",
        "city": "लखनऊ, उत्तर प्रदेश",
        "review": "पंडित जी की कुण्डली विश्लेषण की सटीकता देखकर मैं चकित रह गया। उन्होंने मेरे करियर और स्वास्थ्य के बारे में जो कहा, सब सच साबित हुआ। उज्जैन में इनसे बेहतर मार्गदर्शक मिलना मुश्किल है।",
        "rating": 5,
        "puja": "कुण्डली विश्लेषण"
    }
]

# API Endpoints
@app.get("/api/health")
def health_check():
    return {"status": "ok", "timestamp": datetime.now().isoformat()}

@app.get("/api/info")
def get_info():
    return PANDIT_PROFILE

@app.get("/api/services")
def get_services():
    return SERVICES_DATA

@app.get("/api/gallery")
def get_gallery():
    return GALLERY_IMAGES

@app.get("/api/testimonials")
def get_testimonials():
    return TESTIMONIALS

@app.post("/api/bookings", status_code=status.HTTP_201_CREATED)
def create_booking(booking: BookingCreate):
    created_at = datetime.now().isoformat()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
    INSERT INTO bookings (name, phone, email, puja_name, gotra, preferred_date, city, special_request, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        booking.name,
        booking.phone,
        booking.email,
        booking.puja_name,
        booking.gotra,
        booking.preferred_date,
        booking.city,
        booking.special_request,
        created_at
    ))
    booking_id = cursor.lastrowid
    conn.commit()
    conn.close()

    # Pre-generate WhatsApp direct link
    whatsapp_text = (
        f"प्रणाम पंडित जी, मैंने वेबसाइट Mangalbhatpujaujjain.in पर पूजा बुक की है।\n"
        f"बुकिंग आईडी: #{booking_id}\n"
        f"नाम: {booking.name}\n"
        f"पूजा: {booking.puja_name}\n"
        f"दिनांक: {booking.preferred_date or 'जल्द से जल्द'}\n"
        f"गोत्र: {booking.gotra or 'सामान्य'}\n"
        f"स्थान: {booking.city or 'उज्जैन'}\n"
        f"कृपया समय व विधि की पुष्टि करें।"
    )
    import urllib.parse
    encoded_text = urllib.parse.quote(whatsapp_text)
    whatsapp_url = f"https://wa.me/{PANDIT_WHATSAPP}?text={encoded_text}"

    return {
        "success": True,
        "booking_id": booking_id,
        "message": "पूजा बुकिंग सफलतापूर्वक दर्ज कर ली गई है। पंडित जी आपसे शीघ्र संपर्क करेंगे।",
        "whatsapp_url": whatsapp_url
    }

@app.get("/api/bookings")
def list_bookings(limit: int = 50):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM bookings ORDER BY id DESC LIMIT ?", (limit,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

@app.post("/api/kundali-inquiry", status_code=status.HTTP_201_CREATED)
def create_kundali_inquiry(inquiry: KundaliInquiryCreate):
    created_at = datetime.now().isoformat()
    focus_str = ", ".join(inquiry.focus_areas) if inquiry.focus_areas else ""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
    INSERT INTO kundali_inquiries (name, phone, dob, tob, pob, focus_areas, notes, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        inquiry.name,
        inquiry.phone,
        inquiry.dob,
        inquiry.tob,
        inquiry.pob,
        focus_str,
        inquiry.notes,
        created_at
    ))
    inquiry_id = cursor.lastrowid
    conn.commit()
    conn.close()

    whatsapp_text = (
        f"प्रणाम पंडित जी, मुझे अपनी कुण्डली का विश्लेषण करवाना है।\n"
        f"नाम: {inquiry.name}\n"
        f"फोन: {inquiry.phone}\n"
        f"जन्म तिथि: {inquiry.dob or 'उपलब्ध नहीं'}\n"
        f"जन्म समय: {inquiry.tob or 'उपलब्ध नहीं'}\n"
        f"जन्म स्थान: {inquiry.pob or 'उपलब्ध नहीं'}\n"
        f"विषय: {focus_str or 'संपूर्ण विश्लेषण'}"
    )
    import urllib.parse
    encoded_text = urllib.parse.quote(whatsapp_text)
    whatsapp_url = f"https://wa.me/{PANDIT_WHATSAPP}?text={encoded_text}"

    return {
        "success": True,
        "inquiry_id": inquiry_id,
        "message": "कुण्डली परामर्श अनुरोध प्राप्त हुआ। पंडित जी शीघ्र संपर्क करेंगे।",
        "whatsapp_url": whatsapp_url
    }

@app.get("/api/kundali-inquiries")
def list_kundali_inquiries(limit: int = 50):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM kundali_inquiries ORDER BY id DESC LIMIT ?", (limit,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

@app.post("/api/contact", status_code=status.HTTP_201_CREATED)
def create_contact_message(msg: ContactMessageCreate):
    created_at = datetime.now().isoformat()
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
    INSERT INTO contact_messages (name, phone, email, subject, message, created_at)
    VALUES (?, ?, ?, ?, ?, ?)
    """, (msg.name, msg.phone, msg.email, msg.subject, msg.message, created_at))
    msg_id = cursor.lastrowid
    conn.commit()
    conn.close()
    return {"success": True, "message_id": msg_id, "message": "आपका संदेश प्राप्त हुआ। धन्यवाद।"}

@app.get("/api/contact-messages")
def list_contact_messages(limit: int = 50):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM contact_messages ORDER BY id DESC LIMIT ?", (limit,))
    rows = cursor.fetchall()
    conn.close()
    return [dict(row) for row in rows]

# Serve Frontend SPA on port 8000 for unified ngrok tunneling
FRONTEND_DIST = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "frontend", "dist"))
if os.path.exists(FRONTEND_DIST):
    assets_dir = os.path.join(FRONTEND_DIST, "assets")
    if os.path.exists(assets_dir):
        app.mount("/assets", StaticFiles(directory=assets_dir), name="assets")

    images_dir = os.path.join(FRONTEND_DIST, "images")
    if os.path.exists(images_dir):
        app.mount("/images", StaticFiles(directory=images_dir), name="images")

    @app.get("/")
    def serve_root():
        return FileResponse(os.path.join(FRONTEND_DIST, "index.html"))

    @app.get("/{full_path:path}")
    def serve_frontend_spa(full_path: str):
        if full_path.startswith("api/"):
            raise HTTPException(status_code=404, detail="API endpoint not found")
        file_path = os.path.join(FRONTEND_DIST, full_path)
        if os.path.exists(file_path) and os.path.isfile(file_path):
            return FileResponse(file_path)
        return FileResponse(os.path.join(FRONTEND_DIST, "index.html"))
