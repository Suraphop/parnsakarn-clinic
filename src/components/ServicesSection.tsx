import acupunctureImg from "@/assets/acupuncture.jpg";
import cuppingImg from "@/assets/cupping.jpg";
import herbalImg from "@/assets/herbal-medicine.jpg";
import consultationImg from "@/assets/consultation.jpg";

const services = [
  {
    id: 1,
    title: "การฝังเข็ม",
    description: "การรักษาด้วยเข็มแพทย์แผนจีน เพื่อปรับสมดุลพลังงานในร่างกาย บรรเทาอาการปวด และเสริมสร้างภูมิคุ้มกัน",
    image: acupunctureImg,
    benefits: ["บรรเทาอาการปวด", "ลดความเครียด", "เสริมภูมิคุ้มกัน", "ปรับสมดุลร่างกาย"]
  },
  {
    id: 2,
    title: "การครอบแก้ว",
    description: "การรักษาด้วยแก้วดูด เพื่อกระตุ้นการไหลเวียนของเลือด ขับสารพิษ และบรรเทาอาการเจ็บปวดของกล้ามเนื้อ",
    image: cuppingImg,
    benefits: ["เพิ่มการไหลเวียนเลือด", "ขับสารพิษ", "คลายกล้ามเนื้อ", "ลดการอักเสบ"]
  },
  {
    id: 3,
    title: "ยาจีน",
    description: "ยาสมุนไพรจีนคุณภาพสูง ผสมตามสูตรโบราณ เพื่อรักษาโรคจากรากเหง้า และเสริมสร้างสุขภาพแบบองค์รวม",
    image: herbalImg,
    benefits: ["รักษาต้นตอของโรค", "ไม่มีผลข้างเคียง", "เสริมสร้างสุขภาพ", "ปรับสมดุลภายใน"]
  },
  {
    id: 4,
    title: "ตรวจโรคทั่วไป",
    description: "การตรวจวินิจฉัยแบบแพทย์แผนจีน ดูจากชีพจร ลิ้น และอาการต่างๆ เพื่อหาสาเหตุของโรคที่แท้จริง",
    image: consultationImg,
    benefits: ["วินิจฉัยแม่นยำ", "หาสาเหตุที่แท้จริง", "วางแผนการรักษา", "ติดตามผลการรักษา"]
  }
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gradient-gentle">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 text-thai-heading">
            บริการของเรา
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-thai-body">
            เรามีบริการการรักษาแบบแพทย์แผนจีนครบครัน ด้วยประสบการณ์และความเชี่ยวชาญ 
            เพื่อให้คุณได้รับการรักษาที่ดีที่สุด
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-12">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-4 text-thai-heading">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-thai-body leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-primary text-sm mb-3">ประโยชน์ที่ได้รับ:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary-glow rounded-full mr-2 flex-shrink-0"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-thai-body">
            ต้องการคำปรึกษาเกี่ยวกับบริการใดบริการหนึ่ง?
          </p>
          <button className="btn-medical hover-glow">
            ปรึกษาฟรี
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;