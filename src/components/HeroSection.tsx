import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-transparent"></div>
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-4 text-thai-heading">
                Pansakarn Clinic
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto lg:mx-0 rounded-full"></div>
            </div>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 text-thai-body max-w-xl mx-auto lg:mx-0">
              การรักษาแบบแพทย์แผนจีนดั้งเดิม ด้วยประสบการณ์และความเชี่ยวชาญโดยผู้เชี่ยวชาญด้านแพทย์แผนจีน
              เพื่อสุขภาพที่ดีของคุณ
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-medical hover-glow group"
              >
                <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                จองนัดหมาย
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="btn-medical-outline"
              >
                เรียนรู้เพิ่มเติม
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-primary">ให้บริการ</div>
                <div className="text-sm text-muted-foreground">โดยผู้เขี่ยวชาญด้านแพทย์แผนจีน</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">ผู้ป่วยที่รักษา</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">ความพึงพอใจ</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[500px] bg-gradient-gentle rounded-3xl shadow-elevated flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 bg-primary-light rounded-full flex items-center justify-center mb-6 mx-auto">
                  <div className="text-4xl text-primary">🏥</div>
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-4">
                  การรักษาที่เชื่อถือได้
                </h3>
                <p className="text-muted-foreground text-thai-body">
                  ด้วยแพทย์ผู้เชี่ยวชาญ และเครื่องมือการรักษาที่ทันสมัย
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-light/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/50 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;