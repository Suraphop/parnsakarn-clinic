import { Award, Users, Clock, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6 text-thai-heading">
              เกี่ยวกับคลินิกภาณุศักดิ์
            </h2>
            <div className="w-24 h-1 bg-gradient-primary rounded-full mb-8"></div>
            
            <div className="space-y-6 text-thai-body">
              <p className="text-lg text-muted-foreground leading-relaxed">
                คลินิกภาณุศักดิ์ก่อตั้งขึ้นด้วยความมุ่งมั่นในการนำเสนอการรักษาแบบแพทย์แผนจีนดั้งเดิมที่มีประสิทธิภาพ 
                ผสมผสานกับความรู้สมัยใหม่ เพื่อให้ผู้ป่วยได้รับการรักษาที่ดีที่สุด
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                เราเชื่อในหลักการรักษาแบบองค์รวม ที่มองผู้ป่วยเป็นหนึ่งเดียวกันระหว่างร่างกาย จิตใจ และจิตวิญญาณ 
                การรักษาของเราจึงไม่เพียงแต่มุ่งเน้นที่อาการ แต่ยังรักษาที่สาเหตุของโรคจากรากเหง้า
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                ด้วยประสบการณ์กว่า 20 ปี และการศึกษาอย่างต่อเนื่องในศาสตร์แพทย์แผนจีน 
                เรามั่นใจว่าจะสามารถช่วยให้คุณมีสุขภาพที่ดีขึ้นได้
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">20+</div>
                    <div className="text-sm text-muted-foreground">ปีประสบการณ์</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground">ผู้ป่วยที่ได้รับการรักษา</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-gentle rounded-3xl p-8 shadow-elevated">
              <h3 className="text-2xl font-bold text-primary mb-6 text-thai-heading">
                ปรัชญาการรักษาของเรา
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">การรักษาด้วยความเมtta</h4>
                    <p className="text-muted-foreground text-sm text-thai-body">
                      เราดูแลผู้ป่วยด้วยความเข้าใจและความเอาใจใส่ เหมือนดูแลครอบครัวของตนเอง
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">การรักษาที่ต่อเนื่อง</h4>
                    <p className="text-muted-foreground text-sm text-thai-body">
                      เราติดตามผลการรักษาอย่างใกล้ชิด และปรับแผนการรักษาให้เหมาะสมกับสภาพผู้ป่วย
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">มาตรฐานสูง</h4>
                    <p className="text-muted-foreground text-sm text-thai-body">
                      เราใช้เครื่องมือและยาสมุนไพรคุณภาพสูง พร้อมรักษาความสะอาดตามมาตรฐานการแพทย์
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-light/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;