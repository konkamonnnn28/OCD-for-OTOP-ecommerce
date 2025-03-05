import React from "react";

export default function Blogpost1() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              Post Title
              <small>Subheading</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Blog Home 2</li>
            </ol>
          </div>
          <div className="row">
            {/* Post Content Column */}
            <div className="col-lg-8">
              {/* Preview Image */}
              <img
                className="img-fluid rounded"
                src="images/blog-item-01.jpg"
                alt=""
              />
              <hr />
              {/* Date/Time */}
              <p>โพสต์เมื่อวันที่ 18 ธันวาคม 2567 โดยกรกมล ไตรยวงค์</p>
              <hr />
              {/* Post Content */}
              <p className="lead">แนวคิดปรัชญากับการพัฒนาองค์การ</p>
              <p>
                แนวคิดปรัชญากับการพัฒนาองค์การ ได้แก่{" "}
                <ul className="ml-4" style={{ listStyleType: "lower-alpha" }}>
                  <li>
                    การกำหนดรูปแบบในการพัฒนาองค์การ การกำหนดเป้าหมาย
                    และตัวชี้วัดให้ชัดเจน (KPI){" "}
                  </li>
                  <li> มีแนวคิดเชิงบวกเกี่ยวกับองค์การ</li>
                  <li>มีที่ปรึกษาด้านการพัฒนาองค์การ</li>
                </ul>
              </p>
              <p className="lead">การพัฒนาองค์การคืออะไร</p>
              <p>
                การพัฒนาองค์การ คือ{" "}
                <ul className="ml-4" style={{ listStyleType: "upper-latin" }}>
                  <li>1. การกระทำที่มีการวางแผนล่วงหน้า</li>
                  <li>2. นำไปปฏิบัติทั่วทั้งองค์การ</li>
                  <li>3. บริหารโดยผู้บริหารระดับสูง</li>
                  <li>
                    4. เพื่อเพิ่มประสิทธิผลและความสามารถขององค์การ
                    เป็นการเปลี่ยนแปลงกระบวนการขององค์การ
                  </li>
                  <li>
                    5. กิจกรรมพัฒนาองค์การที่วางแผนไว้ (Planned Intervention)
                    และสอดคล้องกับองค์ความรู้ด้านพฤติกรรมศาสตร์ (Behavioral
                    Science)
                  </li>
                  <li>
                    6. กระบวนการเปลี่ยนแปลงวัฒนธรรมองค์การตามที่วางแผนไว้
                    ด้วยการประยุกต์ใช้เทคโนโลยี งานวิจัย และทฤษฎี Behavioral
                    Sciences
                  </li>
                  <li>
                    7. กิจกรรมพัฒนาองค์การที่วางแผนล่วงหน้า และอยู่บนพื้นฐานของ
                    Behavioral Sciences โดยมุ่งที่การปรับปรุงการทำงานขององค์การ
                    และการพัฒนาบุคคล
                  </li>
                  <li>
                    8. การเปลี่ยนแปลงวัฒนธรรม
                    เทคโนโลยีและการจัดการทั่วทั้งองค์การ
                    หรืออย่างน้อยมีหน่วยงานเกิดการเปลี่ยนแปลง
                  </li>
                  <li>
                    9. ระบบการวางแผนลยุทธ์ด้าน Behavioral Science
                    สร้างความเข้าใจ ในพัฒนาและเปลี่ยนแปลงองค์การ
                    เพื่อปรับปรุงประสิทธิผล
                    และความสามารถขององค์การทั้งในปัจจุบันและอนาคต
                  </li>
                </ul>
              </p>
              <p className="lead">OD มีรากฐานมาจากอะไร</p>
              <p>
                OD ได้รับอิทธิพลองค์ความรู้มาจากศาสตร์ที่หลากหลาย
                <ul className="ml-4" style={{ listStyleType: "lower-roman" }}>
                  <li>1. จิตวิทยาสังคม (Social Psychology)</li>
                  <li>2. กระบวนการกลุ่ม (Group Dynamics)</li>
                  <li>
                    3. จิตวิทยาอุตสาหกรรมและองค์การ (Industrial and Organization
                    Psychology)
                  </li>
                  <li>
                    4. ทฤษฎีการจัดการแบบมีส่วนร่วม (Participative Management
                    Theory)
                  </li>
                  <li>5. พฤติกรรมองค์การ (Organization Behavior)</li>
                  <li>6. สังคมวิทยา (Sociology)</li>
                  <li>7. จิตบำบัด (Psychotherapy)</li>
                </ul>
              </p>
              <p className="lead">ธรรมชาติของ OD คืออะไร</p>
              <p>
                ธรรมชาติของ OD (The Nature of OD)
                <ul className="ml-4">
                  <li>
                    1. OD เกี่ยวข้องศาสตร์หลายแขนง โดยมี Behavioral Sciences
                    เป็นแกนกลางหรือแกนหลัก
                  </li>
                  <li>2. เป้าหมายหลักของ OD คือปรับปรุงประสิทธิผลขององค์การ</li>
                  <li>
                    3. ขอบเขตของการทำ OD คือทำทั่วทั้งระบบ ได้แก่ ฝ่าย แผนก
                    กลุ่ม บุคคล ชุมชน ประเทศ ภูมิภาค
                  </li>
                  <li>
                    4. OD ตระหนักถึงความมุ่งมั่น สนับสนุน และการมีส่วนร่วม
                  </li>
                  <li>5. OD กลยุทธ์ระยะยาวที่องค์การได้วางแผนไว้</li>
                  <li>
                    6. OD ให้ความสำคัญกับระบบทั้งระบบ และองค์ประกอบของระบบ
                  </li>
                  <li>7. OD ต้องอาศัยความร่วมมือจากบุคคลต่างๆ</li>
                  8. OD คือกิจกรรมบนพื้นฐานทางวิชาการ ที่ออกแบบสำหรับการพัฒนา
                  <ul className="ml-4" style={{ listStyleType: "square" }}>
                    <li>ค่านิยม (Values)</li>
                    <li>ทัศนคติ (Attitudes)</li>
                    <li>บรรทัดฐาน (Norms)</li>
                    <li>วิธีการบริหารจัดการ (Management Practices)</li>
                  </ul>
                  <li>
                    9. ผู้มีบทบาทสำคัญในการทำ OD
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>ทีมงาน/คณะกรรมการดำเนินโครงการ OD</li>
                      <li>ผู้จัดการฝ่ายต่างๆ (Line Manager)</li>
                      <li>ผู้อำนวยการความสะดวก (Facilitator)</li>
                      <li>อาจารย์ (Teacher)</li>
                      <li>ผู้ฝึกสอน (Coach)</li>
                    </ul>
                    10. OD ให้ความสำคัญกับการติดตามผลตามที่วางแผนไว้ (Planned
                    Follow-up)
                  </li>
                  <li>
                    11. OD เกี่ยวข้องกับการเปลี่ยนแปลง หรือปรับปรุงกระบวนการ
                    หรือโครงสร้างขององค์การ
                  </li>
                </ul>
              </p>
              <p className="lead">ลักษณะสำคัญของ OD</p>
              ลักษณะสำคัญของการพัฒนาองค์การ มีดังนี้
              <ul className="ml-4">
                <p>
                  1. OD เกี่ยวข้องกับการเปลี่ยน แปลงกลยุทธ์
                  <ul className="ml-4">
                    <li>
                      โครงสร้างและ/หรือกระบวนการของระบบทั้งระบบมีความหมายครอบคลุมตั้งแต่องค์การ
                      ฝ่ายหรือกลุ่มงาน
                    </li>
                  </ul>
                </p>
                <p>
                  2. OD เป็นการประยุกต์ใช้และถ่ายทอดความรู้และวิธีปฏิบัติด้าน
                  Behavioral Science ให้กับสมาชิกขององค์การ
                  <ul className="ml-4">
                    <li>
                      เช่น ภาวะผู้นำ กระบวนการกลุ่ม การออกแบบงาน กลยุทธ์
                      รูปแบบองค์การ ความสัมพันธ์ระหว่างประเทศ เป็นต้น{" "}
                    </li>
                  </ul>
                </p>
                <p>3. OD เกี่ยวข้องกับการจัดการการเปลี่ยนแปลงตามที่วางแผนไว้</p>
                <p>
                  4. OD
                  เกี่ยวข้องกับการสร้างและส่งเสริมการเปลี่ยนแปลงให้ดำรงอยู่ต่อไป
                </p>
                <p>5. OD มุ่งปรับปรุงประสิทธิผลขององค์การ</p>
              </ul>
              <p className="lead">
                การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม
              </p>
              การพัฒนา OD จะต้องอยู่บนรากฐานของความรู้และค่านิยม ดังนี้
              <ul className="ml-4">
                1. ความเข้าใจในระบบสังคม (Understanding social systems)
                คือต้องเข้าใจในศาสตร์ที่เกี่ยวข้องกับการพัฒนาและเปลี่ยนแปลงองค์การ
                <ul className="ml-4">
                  <li>
                    เช่น จิตวิทยา จิตวิทยาสังคม สังคมวิทยา รัฐศาสตร์ เศรษฐศาสตร์
                    ปรัชญา ศาสนา ฟิสิกส์และชีววิทยา เป็นต้น
                  </li>
                </ul>
                2. เข้าใจในวิธีการและสาเหตุของการเปลี่ยนแปลง
                <ul className="ml-4"></ul>
                3. เข้าใจบทบาทบุคคลที่สาม (Third Party)
                ของที่ปรึกษาด้านการเปลี่ยนแปลง
                <ul className="ml-4">
                  <li>
                    บุคคลที่ไม่มีส่วนได้ส่วนเสีย
                    เป็นที่ปรึกษาด้านการเปลี่ยนแปลงและการพัฒนาองค์การ
                  </li>
                </ul>
              </ul>
              <p className="lead">ค่านิยมของ OD (OD Values)</p>
              ค่านิยมของ OD ดังนี้
              <ul className="ml-4">
                <p>
                  1. การส่งเสริมศักดิ์ศรีแห่งความเป็นมนุษย์ (State of Human
                  Dignity)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  2. การยึดมั่นในคุณค่าของมนุษย์ (Humanistically Oriented )
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  3. ความเท่าเทียม (Democracy)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  4. ความสุจริต (Honesty)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  5. การกระจายอำนาจ (Empowerment)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  6. ค้นหาปัญหาและเป็นวิทยาศาสตร์ (Inquiry and Sciences)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  7. มีจิตช่วยเหลือ (Being Helpful)
                  <ul className="ml-4"></ul>
                </p>
              </ul>
              <p className="lead">สรุปค่านิยมของ OD ที่สำคัญ</p>
              สรุปค่านิยมของ OD ที่สำคัญ ได้แก่
              <ul className="ml-4">
                <p>
                  1. การให้ความเคารพและการมีส่วนร่วม (Respect and Inclusion)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  2. การให้ความร่วมมือ (Collaboration)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  3. ความจริงใจ (Authenticity)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  4. ความเข้าใจในตนเอง (Self-awareness)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  5. การกระจายอำนาจ (Empowerment)
                  <ul className="ml-4"></ul>
                </p>
                <p>
                  6. ประชาธิปไตยและความเป็นธรรมในสังคม (Democracy and Social
                  Justice )<ul className="ml-4"></ul>
                </p>
              </ul>
              <p className="lead">
                ข้อแตกต่างระหว่าง OD กับ Change Management (CM)
              </p>
              ข้อแตกต่างระหว่าง OD กับ Change Management (CM) มีดังนี้
              <ul className="ml-4">
                <p>
                  1. OD
                  ทำให้องค์การตระหนักและสร้างการเรียนรู้ผ่านกระบวนการแก้ไขปัญหาหลัก
                  <ul className="ml-4">
                    <li>
                      ส่วน CM
                      ประยุกต์วิธีการแก้ปัญหาอย่างมีเหตุผลในการทำให้เป้าหมายที่ต้องการบรรลุผล
                    </li>
                  </ul>
                </p>
                <p>
                  2. OD มุ่งไปที่พลวัตของระบบในองค์การ
                  ซึ่งเปิดพื้นที่ให้องค์การวิจัย
                  สะท้อนและทบทวนรูปแบบของระบบที่ดำรงอยู่เวลานั้น
                  <ul className="ml-4">
                    <li>ส่วน CM มุ่งไปที่ผลลัพธ์มากกว่า</li>
                  </ul>
                </p>
                <p>
                  3. OD
                  ตั้งอยู่บนความร่วมมือระหว่างองค์การและที่ปรึกษาด้านพัฒนาองค์การในการกำหนดกระบวนการที่เกี่ยวข้อง
                  <ul className="ml-4">
                    <li>
                      ส่วน CM
                      เน้นที่บทบาทของผู้เชี่ยวชาญหรือผู้ที่แก้ปัญหาได้อย่างเบ็ดเสร็จ
                    </li>
                  </ul>
                </p>
                <p>
                  4. OD แก้ปัญหากระบวนการต่างๆ ที่ไม่ปรากฏชัดเจน เช่น
                  การเปลี่ยนแปลงที่เกี่ยวข้องกับอำนาจ เชื้อชาติ
                  เพศและสถานะทางสังคม และการอยู่ท่ามกลางแรงกดดันอื่นๆ ทางสังคม
                  <ul className="ml-4">
                    <li>
                      ส่วน CM
                      จัดการกับการเปลี่ยนแปลงที่ปรากฏอย่างชัดเจนของสถานการณ์หนึ่งๆ
                    </li>
                  </ul>
                </p>
              </ul>
              <p className="lead">
                สรุปความแตกต่างระหว่าง OD และ Change Management (CM)
              </p>
              สรุปความแตกต่างระหว่าง OD และ Change Management (CM) ดังนี้
              <ul className="ml-4">
                1. OD
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  <li>การเปลี่ยนแปลงเพื่อเพิ่มความสามารถของบุคลากร</li>
                  <li>
                    การเปลี่ยนแปลงตามที่วางแผนไว้ล่วงหน้า และยึดหลักการของ OD
                  </li>
                </ul>
                ส่วน CM
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  <li>การเปลี่ยนแปลงเพื่อเพิ่มมูลค่าทางเศรษฐกิจ</li>
                  <li>เป็นไปเพื่อผลทางการตลาด และไม่ได้ยึดหลักการของ OD</li>
                </ul>
                2. OD
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  <li>
                    ส่งเสริมศักยภาพ ความมีส่วนร่วม และการพัฒนามนุษย์พร้อมๆ
                    กับเพิ่มผลประกอบการ และการสร้างการได้เปรียบเชิงแข่งขัน
                  </li>
                  <li>
                    ถ่ายทอดความรู้
                    และทักษะเพื่อช่วยให้ระบบมีความสามารถในการจัดการการเปลี่ยนแปลงในอนาคต
                  </li>
                </ul>
                ส่วน CM
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  <li>มุ่งที่ต้นทุน คุณภาพและตารางการทำงาน</li>
                  <li>ไม่จำเป็นต้องมีการถ่ายทอดทักษะ</li>
                </ul>
                <p className="lead">พัฒนาการของ OD (The Revolution of OD)</p>
                พัฒนาการของ OD (The Revolution of OD) มีดังนี้
                <ul className="ml-4">
                  <p>
                    1. มาจากรากฐานการฝึกอบรมเชิงปฏิบัติการ (Laboratory Training
                    Background หรือ T-group)
                  </p>
                  <p>2. มาจากรากฐาน Action Research และ Survey Feedback</p>
                  <p>
                    3. มาจากรากฐาน Normative Background
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>
                        แนวคิดที่เชื่อว่ามีวิธีการที่ดีที่สุดเพียงวิธีการเดียว
                        (One Best Way) ในการบริหารองค์การ
                      </li>
                      <li>รูปแบบการจัดการแบบมีส่วนร่วม</li>
                      <li>หลักการของตาข่าย (เครือข่าย)</li>
                    </ul>
                  </p>
                  <p>
                    4. มาจากรากฐานผลิตภาพและคุณภาพชีวิตในการทำงาน (Productivity
                    และ Quality-of-Work-Life)
                    <ul className="ml-4" style={{ listStyleType: "decimal" }}>
                      <li>
                        มุ่งพัฒนารูปแบบการทำงานที่ให้ความสำคัญกับความสอดคล้องระหว่างเทคโนโลยีกับมนุษย์
                      </li>
                      <li>เน้นการมีส่วนร่วมของพนักงาน</li>
                      <li>
                        การจัดการทั่วทั้งองค์การ (Total Quality Management)
                      </li>

                      <ul className="ml-4">
                        <li>- Total = ทุกคน ทุกระดับ กระทรวง กรม กอง หน่วย</li>
                        <li>
                          - Quality = คุณภาพการให้บริการ
                          ความพึงพอใจของผู้รับบริการ
                        </li>
                        <li>- Management = การบริหารองค์การ</li>
                      </ul>
                      <li>คุณภาพชีวิตในการทำงาน (Quality of Work Life)</li>
                    </ul>
                  </p>
                  5. มาจากรากฐาน Strategic Change
                </ul>
              </ul>
              <p className="lead">
                รูปแบบในการพัฒนาองค์การ: OD (Models of Planned Change)
                <ul className="ml-4"></ul>
              </p>
              1. รูปแบบการเปลี่ยนแปลงของ Lewin (Lewin's Change Model)
              <ul className="ml-4"></ul>
              <p>
                1.1 Unfreezing: การเตรียมพร้อมกับการเปลี่ยนแปลง
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  <li>
                    การเตรียมพร้อมกับการเปลี่ยนแปลง
                    กระบวนการนำเสนอข้อมูลความแตกต่างระหว่างพฤติกรรมที่ต้องการให้
                    สมาชิกขององค์การแสดงออกกับพฤติกรรมปรากฏในปัจจุบัน
                  </li>
                  <li>เพื่อจูงใจให้สมาชิกเข้าร่วมกิจกรรมการเปลี่ยนแปลง</li>
                  <li>การทำให้ความไม่พึงพอใจต่อสถานะปัจจุบันปรากฏขึ้นชัดเจน</li>
                  <li>การค้นหาทางเลือกที่ดีกว่าหรือน่าพึงพอใจมากกว่า</li>
                  <li>กระบวนการพัฒนาองค์การ</li>
                  <li>
                    การทำให้องค์การมีความพร้อมสำหรับการเปลี่ยนแปลงไปสู่สถานะใหม่ที่ดีขึ้น
                  </li>
                  ทำให้สมาชิกในองค์การตระหนักว่าองค์การมีความจำเป็นต้องเปลี่ยนแปลง
                  มิฉะนั้น จะไม่สามารถสร้างผลลัพธ์ที่ดีขึ้น เช่น
                </ul>
                <ul className="ml-4">
                  <li>-ไม่สามารถมีผลประกอบการทางการเงินที่ดีขึ้น</li>
                  <li>-ไม่สามารถยกระดับคุณภาพชีวิตในการทำงานของพนักงาน</li>
                  <li>-ไม่สามารถดำเนินกิจการต่อไปได้</li>
                </ul>
              </p>
              <p>
                1.2 Moving/ Change: การดำเนินการเปลี่ยนแปลง
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  <li>
                    การยกระดับพฤติกรรมขององค์การ ฝ่ายหรือบุคคลไปสู่ระดับใหม่
                  </li>
                  <li>
                    -การแทรกแซงระบบด้วยการเปลี่ยนโครงสร้างและกระบวนการขององค์การ
                    เพื่อหล่อหลอมพฤติกรรมและค่านิยมและทัศนคติใหม่
                  </li>
                  <li>
                    -ยึดมั่นในพฤติกรรมใหม่
                    เพื่อให้สถานะในอนาคตตามที่ต้องการเกิดขึ้น
                  </li>
                  <li>
                    รับรู้ถึงความจำเป็นของการเปลี่ยนแปลง
                    ต้องทำให้ก้าวสู่สถานะใหม่ที่ดีกว่าเดิม
                  </li>
                  การจัดกิจกรรมพัฒนาองค์การที่สามารถเปลี่ยนแปลงองค์การให้ก้าวสู่สถานะใหม่ตามที่ต้องการ
                  เช่น
                  <ul className="ml-4">
                    <li>-การเปลี่ยนแปลงโครงสร้างองค์การ</li>
                    <li>-การเปลี่ยนแปลงค่านิยมขององค์การ</li>
                    <li>-การพัฒนาศักยภาพของพนักงาน</li>
                    <li>-การเปลี่ยนแปลงระบบให้รางวัลขององค์การ</li>
                    <li>
                      -Disruptive Technology
                      เกิดการทำลายเพื่อให้เกิดสิ่งใหม่ที่ดีขึ้นหรือดีกว่าเดิม
                    </li>
                  </ul>
                </ul>
              </p>
              <p>
                1.3 Refreezing: การรักษาผลของการเปลี่ยนแปลง
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  <li>
                    เป็นขั้นตอนที่ทำให้สมาชิกในองค์การแสดงพฤติกรรมใหม่
                    ที่สอดคล้องกับการเปลี่ยนแปลงองค์การด้วยกิจกรรมพัฒนาองค์การในขั้นตอน
                    Moving/Change และไม่หวนกลับไปแสดงพฤติกรรมเดิมอีก
                  </li>
                  Refreezing
                  เป็นขั้นตอนที่ทำให้องค์การดำรงอยู่ในสถานะใหม่ที่มีความสมดุล
                  โดยกระทำผ่านกลไกสนับสนุน ที่ส่งเสริมสถานะใหม่ขององค์การ ด้าน
                  <ul className="ml-4">
                    <li>-วัฒนธรรม</li>
                    <li>-บรรทัดฐาน</li>
                    <li>-นโยบาย</li>
                    <li>-โครงสร้างองค์การ</li>
                  </ul>
                  <li>
                    Refreezing
                    คือกระบวนการที่จะทำให้สถานะใหม่ตามที่ต้องการดำรงอยู่อย่างมั่นคง
                    ยั่งยืน ระยะยาว และรักษาผลของการเปลี่ยนแปลงให้ดำรงอยู่ตลอดไป
                  </li>
                </ul>
              </p>
              2.รูปแบบ Action Research (Action Research Model)
              <ul className="ml-4"></ul>
              Action Research (การวิจัยเชิงปฏิบัติการ)
              <ul className="ml-4" style={{ listStyleType: "disc" }}>
                <li>
                  เป็นกระบวนการที่ดำเนินต่อเนื่องจากขั้นตอนแรกไปจนถึงขั้นตอนสุดท้าย
                </li>
                <li>
                  แล้วย้อนกลับไปเริ่มต้นที่ขั้นตอนแรกใหม่และดำเนินไปตามวงจรเดิมตลอดเวลา
                </li>
                วงจรของ Action Research มีลักษณะคล้ายกับวงจรคุณภาพ PDCA
              </ul>
              <ul className="ml-4">
                <li>1.Planning: การวางแผน (กำหนดเป้าหมาย, กำหนดตัวชี้วัด)</li>
                <li>2.Do: ดำเนินการ (กระบวน การ, กิจกรรม, โครงการ)</li>
                <li>3.Check: ประเมิน ผล (กระบวนการ, กิจกรรม, โครงการ)</li>
                4.Act: นำผลการประเมินไปพัฒนาปรับปรุง
              </ul>
              <li>Action Research มี 8 ขั้นตอน ดังนี้</li> วงจรของ Action
              Research มีลักษณะคล้ายกับวงจรคุณภาพ PDCA
              <ul className="ml-4">
                <li>
                  1. การรับรู้ปัญหา (Problem Identification)
                  เป็นขั้นตอนที่ผู้บริหาร
                  หรือผู้มีอำนาจและบทบาทสำคัญในองค์การตระหนักว่าองค์การมีปัญหา
                  และต้องการให้ที่ปรึกษาด้านการพัฒนาองค์การช่วยแก้ปัญหาดังกล่าว
                </li>
                <li>
                  2. การปรึกษากับผู้เชี่ยวชาญด้านการพัฒนาองค์การ (Consultation
                  with a Behavioral Sciences Export)
                </li>
                <li>
                  3. การรวบรวมข้อมูลและการวิเคราะห์เบื้องต้น (Data Gathering and
                  Preliminary Diagnosis)
                </li>
                <li>4.Act: นำผลการประเมินไปพัฒนาปรับปรุง</li>
                <li>
                  5. การวิเคราะห์ปัญหาร่วมกัน (Joint Diagnosis of the Problem)
                </li>
                <li>6. การวางแผนปฏิบัติร่วมกัน (Joint Action Planning)</li>
                <li>7. การดำเนินการตามแผนปฏิบัติการ (Action)</li>
                <li>
                  8. การรวบรวมข้อมูลหลังการดำเนินการ (Data Gathering after
                  Action)
                </li>
              </ul>
              3.รูปแบบทั่วไปของการวางแผนการเปลี่ยนแปลง (General Model of Planned
              Change)
              <ul className="ml-4">1. การกำหนดประเด็น (En-tering)</ul>
              1.1
              ที่ปรึกษาด้านการพัฒนาองค์การศึกษาข้อมูลเบื้องต้นเกี่ยวกับองค์การ
              เช่น
              <ul className="ml-4" style={{ listStyleType: "disc" }}>
                <li>-พันธกิจ ค่านิยม</li>
                <li>-ความเป็นมา</li>
                <li>-โครงสร้างองค์การ</li>
                <li>-สินค้าและบริการ</li>
                <li>-ความคาดหวังขององค์การ</li>
                <li>-ประสบการณ์ขององค์การ</li>
              </ul>
              1.2 การรวบรวมข้อมูลขององค์การได้จาก
              <ul className="ml-4" style={{ listStyleType: "disc" }}>
                <li>-การสังเกตพฤติกรรมการทำงาน</li>
                <li>-การสัมภาษณ์</li>
                <li>-การสำรวจความคิดเห็นด้วยแบบสอบถาม</li>
                <li>-การสำรวจความคิดเห็นด้วยแบบสอบถาม</li>
              </ul>
              <p>
                การทำข้อตกลง (Con-tracting)
                <li>
                  1. ความคาดหวังของทั้งสองฝ่าย (Expectation of the Parties)
                </li>
                <ul className="ml-4">
                  <li>- องค์การระบุผลลัพธ์ที่ได้</li>
                  <li>- ที่ปรึกษาฯ ระบุค่าตอบแทน และการอ้างอิงผลงาน</li>
                </ul>
              </p>
              {/* การทำข้อตกลง (Con-tracting) */}
              <li> 2. เวลาและทรัพยากรอื่นๆ (Time and Resources)</li>
              <ul className="ml-4">
                <li>-ระยะเวลาดำเนินโครงการ</li>
                <li>-ค่าใช้จ่ายที่เกี่ยวข้อง</li>
              </ul>
              <li> 3. กฎกติกาในการดำเนินโครงการ (Ground Rules)</li>
              <ul className="ml-4">
                <li>-การรักษาความลับ</li>
                <li>-แนวทางการตัดสินใจแต่ละฝ่ายที่มีความเห็นไม่ตรงกัน</li>
              </ul>
              {/* 3.รูปแบบทั่วไปของการวางแผนการเปลี่ยนแปลง (General Model of Planned */}
              {/* Change) */}
              <ul className="ml-4">
                2. การวินิจฉัยระบบ (Diagnosing) ด้วย McKinsey's 7S Model
              </ul>
              <ul className="ml-4">
                3. การวางแผนและปฏิบัติตามแผน (Planning and Implementing Change)
              </ul>
              <ul className="ml-4">
                4. การประเมินและรักษาผลของการเปลี่ยนแปลง (Evaluating
                Institutionalizing Change)
              </ul>
              4.แนวคิดเชิงบวกเกี่ยวกับองค์การ และรูปแบบการเปลี่ยนแปลงเชิงบวก
              (Positive Organizational Scholarship (POS) and Appreciative
              Inquiry (AI))
              <ul className="ml-4">
                แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ Positive
                Organizational Scholarship (POS)
              </ul>
              <li>
                1. การเบี่ยงเบนเชิงบวก (Positive Deviance)
                ผลลัพธ์เชิงบวกที่ดีเลิศและกระบวนการที่ทำให้ผลลัพธ์ดังกล่าวเกิดขึ้น
              </li>
              <li>
                2. การมุ่งปัจจัยด้านบวก (An Affirmative orientation)
                การให้ความสำคัญกับจุดแข็งแทนที่จะเป็นจุดอ่อน
                หรือความสัมพันธ์ที่เป็นประโยชน์แทนที่เป็นความสัมพันธ์ที่ก่อให้เกิดปัญหา
              </li>
              <li>
                3. ความประพฤติที่ซื่อสัตย์และถูกทำนองคลองธรรม (Virtuousness)
                และการยกระดับกระบวนการต่างๆ (Elevating Process)
              </li>
              <ul className="ml-4">เช่น การทำความดีและทำอย่างมีประสิทธิภาพ</ul>
              <ul className="ml-4">
                หลักการพื้นฐานของ POS
                (แนวคิดเชิงบวกในการพัฒนาและเปลี่ยนแปลงองค์การ Positive
                Organizational Scholarship)
              </ul>
              เป็นการอธิบายหลักการพื้นฐานว่า
              มนุษย์และองค์การดำรงอยู่ในสถานะต่างๆ 3 สถานะ ได้แก่
              <ul className="ml-4" style={{ listStyleType: "disc" }}>
                <li>1. การเบี่ยงเบนเชิงลบ (Negative Deviance)</li>
                <li>2. ปกติ (Ordinary)</li>
                <li>3. การเบี่ยงเบนเชิงบวก (Positive Deviance)</li>
              </ul>
              <p className="lead">
                1. Negative Deviance
                การเบี่ยงเบนเชิงลบก่อให้เกิดจุดอ่อนในองค์การ
                <ul className="ml-6"></ul>
              </p>
              <li>เหมือนมนุษย์ที่กำลังป่วย </li>
              <li>ภาวะขาดทุน</li>
              <li>อาการเจ็บป่วยของพนักงาน</li>
              <li>ปัญหาคุณภาพและความผิดพลาดในการผลิต</li>
              <li>พฤติกรรมขาดจริยธรรม</li>
              <li>ความสัมพันธ์ระหว่างบุคคลในอยู่ในภาวะเลวร้าย</li>
              <ul className="ml-4"></ul>
              <p className="lead">
                2. Ordinary ความเป็นปกติภายในองค์กร
                <ul className="ml-6"></ul>
              </p>
              <li>Health มีพลัง มีกำลังใจ </li>
              <li>Effective มีประสิทธิผล</li>
              <li>Reliable มีความเชื่อถือ</li>
              <li>Ethical มีจริยธรรม</li>
              <li>Compromise ประนีประนอม </li>
              <ul className="ml-4"></ul>
              <p className="lead">
                3. Positive Deviance
                การเบี่ยงเบนเชิงบวกก่อให้เกิดจุดแข็งในองค์การ
                <ul className="ml-6">
                  <li>
                    สถานะที่ปฏิบัติหน้าที่ได้ดีเลิศ (An Extraodinarily Function
                    State){" "}
                  </li>
                </ul>
              </p>
              <li>มนุษย์อยู่ในสถานะมีชีวิตชีวา (Filled with Vitality)</li>
              <li>ปฏิบัติหน้าที่อย่างราบรื่น</li>
              <li>องค์การที่มีศักยภาพสูง (Thrive)</li>
              <li>การปฏิบัติงานขององค์การสอดคล้องกับจริยธรรม </li>
              <li>ความก้าวหน้าเกิดขึ้นในทุกระดับชั้นขององค์การ </li>
              <li>การกำหนด Mindset เพื่อสร้างพลังบวกให้กับองค์การ </li>
              <li>การสร้างพลังบวกเพื่อนำไปสู่การเปลี่ยน แปลง </li>
              <p className="lead">
                การประยุกต์ใช้รูปแบบการเปลี่ยนแปลงเชิงบวกกับการเปลี่ยนแปลงตามที่วางไว้
                (The Application of Positive Model)
              </p>
              <p>
                รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI)
                <ul className="ml-4"></ul>
                <li>
                  1. รูปแบบการเปลี่ยนแปลงเชิงบวก (Appreciate Inquiry: AI)
                  คือการเปลี่ยนจุดแข็งให้เป็นจุดแกร่ง
                </li>
                <li>
                  2. รูปแบบการเปลี่ยนแปลงเชิงบวก Appreciate Inquiry (AI)
                  คือการประยุกต์ใช้การเปลี่ยนแปลงตามที่วางแผนไว้
                </li>
                <ul className="ml-4">
                  <li>
                    - เป็นรูปแบบลัทธิการสร้างสังคม (Social Constructionism)
                    มีลักษณะเชิงปฏิวัติเพื่อนำไปสู่การเปลี่ยนแปลง{" "}
                  </li>
                  <li>
                    -
                    สนับสนุนการใช้ค่านิยมเชิงบวกในการวินิจฉัยและเปลี่ยนแปลงองค์การ{" "}
                  </li>
                  <li>
                    - เป็นรูปแบบลัทธิการสร้างสังคม (Social Constructionism)
                    มีลักษณะเชิงปฏิวัติเพื่อนำไปสู่การเปลี่ยนแปลง{" "}
                  </li>
                  <li>
                    - เป็นรูปแบบลัทธิการสร้างสังคม (Social Constructionism)
                    มีลักษณะเชิงปฏิวัติเพื่อนำไปสู่การเปลี่ยนแปลง{" "}
                  </li>
                </ul>
              </p>
              <p>
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  ที่ปรึกษาภายในและภายนอก (Internal and External Practitioners)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}>
                    1. ที่ปรึกษาภายนอก ได้แก่
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>บุคคลที่ได้รับการว่าจ้างให้ช่วยเปลี่ยนแปลงองค์การ</li>
                    </ul>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>พนักงานบริษัทที่ให้คำปรึกษา (Consulting Firm)</li>
                    </ul>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>บุคลากรของมหาวิทยาลัย หรือวิทยากรที่ปรึกษาอิสระ</li>
                    </ul>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    2. ที่ปรึกษาภายใน ได้แก่
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>
                        บุคลากรขององค์การทั้งที่ที่ปฏิบัติงานด้าน OD โดยเฉพาะ
                      </li>
                    </ul>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>หรือที่ปฏิบัติงานด้านอื่นร่วม เช่น</li>
                    </ul>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>งานด้านฝึกอบรม งานด้านทรัพยากรมนุษย์ </li>
                    </ul>
                  </ul>
                </ul>
              </p>
              <p>
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  คุณสมบัติของที่ปรึกษาด้านการพัฒนาองค์การ (Competencies of
                  Practitioners)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}>
                    1. ทักษะด้านการทำความเข้าใจตนเอง หรือ Competency
                    ด้านการบริหารอารมณ์ความรู้สึกของตนเอง
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>ความรับผิดชอบในการให้ความช่วยเหลือผู้อื่น</li>
                    </ul>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>การสร้างความสมดุลระหว่างเหตุผลและอารมณ์</li>
                    </ul>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}>
                      <li>การรู้จักบริหารความเครียดของตนเอง</li>
                    </ul>
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    2. ทักษะการสร้างความสัมพันธ์กับผู้อื่น (Interpersonal
                    Skills)
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    3. ทักษะการให้คำปรึกษาทั่วไป (General Consultation Skills)
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    4. ทฤษฎีเกี่ยวกับการพัฒนาองค์การ (Organization Development
                    Theory)
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    5. เป็นนักวิเคราะห์ (Diagnostician)
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    6. เป็นนักวิจัยสังคมวิทยา (Social Scientist Researcher)
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    7. เป็นนักเปลี่ยนแปลง (Interventionist)
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    8. เป็นผู้ให้ความรู้หรือนักฝึกอบรม (Educator or Trainer)
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    9. เป็นผู้อำนวยความสะดวก (Facilitator)
                    <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                    10. เป็นผู้ฝึกสอน (Coach)
                  </ul>
                </ul>
              </p>
              <p>
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  ทักษะและความสามารถของที่ปรึกษาด้านการพัฒนาองค์การจะต้องประกอบด้วย
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  1. ความรู้ (Knowledge)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  2. การยึดมั่นในมาตรฐานสูงสุดของจริยธรรมและอาชีพ (Commitment)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  3. ความสามารถในการสร้างเครือข่าย (Network Ability)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  4. ทักษะในการแสวงหาข้อมูล (Elicitation Skills)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  5. ทักษะการประเมินและการบูรณาการ (Evaluation and Integration
                  Skills)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  6. ทักษะการวินิจฉัยและการนำเสนอแนวทาง (Diagnostic and
                  Prognosis Skills)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                </ul>
              </p>
              <p>
                <ul className="ml-4" style={{ listStyleType: "disc" }}>
                  จริยธรรมของที่ปรึกษาด้านการพัฒนาองค์การ(Professional Ethics)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  1. การสำแดงข้อมูลเท็จ (Misrepresentation)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  2. การนำข้อมูลไปใช้ในทางที่ผิด (Misuse of Data)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  3. การบังคับ (Coecion)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  4. ความเห็นต่างในค่านิยมและเป้าหมาย (Value and Goal Conflict)
                  <ul className="ml-4" style={{ listStyleType: "disc" }}></ul>
                  5. ความไม่พร้อมด้านเทคนิค (Technical Ineptness)
                </ul>
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
              <p>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Error, nostrum, aliquid, animi, ut quas placeat totam sunt
                tempora commodi nihil ullam alias modi dicta saepe minima ab quo
                voluptatem obcaecati?
              </p>
              <p>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Harum, dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione
                tempore quidem voluptates cupiditate voluptas illo saepe quaerat
                numquam recusandae? Qui, necessitatibus, est!
              </p>
              <blockquote className="blockquote">
                <p className="mb-0"></p>
                <footer className="blockquote-footer">
                  Someone famous in
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
              <hr />
              <div className="blog-right-side">
                {/* Comments Form */}
                <div className="card my-4">
                  <h5 className="card-header">Leave a Comment:</h5>
                  <div className="card-body">
                    <form>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          rows={3}
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Single Comment */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_01.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                </div>
              </div>
              {/* Comment with nested comments */}
              <div className="media mb-4">
                <img
                  className="d-flex mr-3 rounded-circle"
                  src="images/testi_02.png"
                  alt=""
                />
                <div className="media-body">
                  <h5 className="mt-0">Commenter Name</h5>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                  vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                  nisi vulputate fringilla. Donec lacinia congue felis in
                  faucibus.
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_01.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                  <div className="media mt-4">
                    <img
                      className="d-flex mr-3 rounded-circle"
                      src="images/testi_03.png"
                      alt=""
                    />
                    <div className="media-body">
                      <h5 className="mt-0">Commenter Name</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin. Cras purus odio,
                      vestibulum in vulputate at, tempus viverra turpis. Fusce
                      condimentum nunc ac nisi vulputate fringilla. Donec
                      lacinia congue felis in faucibus.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Sidebar Widgets Column */}
            <div className="col-md-4 blog-right-side">
              {/* Search Widget */}
              <div className="card mb-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              {/* Categories Widget */}
              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">Web Design</a>
                        </li>
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">Freebies</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">Tutorials</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Widget */}
              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the new Bootstrap 4 card
                  containers!
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
