import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "คุณสมใจ วงศ์สวัสดิ์",
    condition: "อาการปวดหลังเรื้อรัง",
    text: "ทุกข์ทรมานกับอาการปวดหลังมานาน หลายปี ไปหาหมอหลายที่ก็ไม่หาย มาที่คลินิกภาณุศักดิ์ รักษาด้วยการฝังเข็ม 3 เดือน อาการดีขึ้นมาก ตอนนี้กลับมาทำงานปกติได้แล้ว",
    rating: 5
  },
  {
    id: 2,
    name: "คุณนิรมล ใจดี",
    condition: "โรคภูมิแพ้",
    text: "ลูกสาวเป็นภูมิแพ้รุนแรงตั้งแต่เด็ก กินยาแล้วหาย แต่หยุดยาก็กลับมาเป็นใหม่ มารักษาที่นี่ด้วยยาจีน ใช้เวลา 6 เดือน อาการดีขึ้นเยอะ ตอนนี้ไม่ต้องกินยาแพ้แล้ว",
    rating: 5
  },
  {
    id: 3,
    name: "คุณประยุทธ ศิลปกรรม",
    condition: "โรคความดันโลหิตสูง",
    text: "เป็นความดันสูงมา 5 ปี กินยาทุกวันแต่ควบคุมไม่ได้ดี มาปรึกษาหมอที่นี่ กินยาจีนควบคู่กับการปรับไลฟ์สไตล์ ตอนนี้ความดันปกติ ไม่ต้องกินยาบ่อยๆ แล้ว",
    rating: 5
  },
  {
    id: 4,
    name: "คุณมานิตย์ สุขใจ",
    condition: "โรคนอนไม่หลับ",
    text: "นอนไม่หลับมาหลายเดือน เพราะความเครียดจากงาน ไปรักษาที่นี่ด้วยการฝังเข็มและยาจีน รู้สึกผ่อนคลายขึ้น นอนหลับได้ดีขึ้น ชีวิตกลับมาเป็นปกติ",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gradient-gentle">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 text-thai-heading">
            ความคิดเห็นจากผู้ป่วย
          </h2>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-thai-body">
            ฟังเสียงจากผู้ป่วยที่ได้รับการรักษาและมีสุขภาพที่ดีขึ้น
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="service-card hover-lift">
              <div className="flex items-center mb-6">
                <Quote className="h-8 w-8 text-primary-glow mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-muted-foreground mb-6 text-thai-body leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-border pt-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(2)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.condition}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card rounded-2xl p-8 shadow-gentle">
            <h3 className="text-2xl font-bold text-primary mb-4 text-thai-heading">
              พร้อมจะหายดีแล้วหรือยัง?
            </h3>
            <p className="text-muted-foreground mb-6 text-thai-body">
              เริ่มต้นการรักษาที่จะเปลี่ยนชีวิตคุณให้ดีขึ้น
            </p>
            <button className="btn-medical hover-glow">
              เริ่มการรักษาวันนี้
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;