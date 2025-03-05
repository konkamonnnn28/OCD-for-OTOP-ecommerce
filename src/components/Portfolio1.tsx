import Link from "next/link";
import React from "react";

export default function Portfolio() {
  return (
    <div>
      <>
        {/* full Title */}
        <div className="full-title">
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">
              การดำเนินการเปลี่ยนแปลงองค์การภาครัฐ
              {/* <small>Subheading</small> */}
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
              <li className="breadcrumb-item active">Portfolio 1</li>
            </ol>
          </div>
          <div className="project-inner">
            {/* Project One */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-01.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐในยุคดิจิทัล</h3>
                <p>
                  <Link
                    href="https://www.salika.co/2024/05/25/cloud-using-for-digital-goverment/"
                    target="-blank"
                  >
                    ก้าวที่ท้าทายของการเปลี่ยนผ่านสู่ รัฐบาลดิจิทัล
                    กับการใช้คลาวด์เชื่อมโยงข้อมูลภาครัฐแบบไร้รอยต่อ
                  </Link>
                </p>
                <p>
                  “ต้องยอมรับว่าความท้าทายของภาครัฐในยุคนี้ คือ
                  จะทำอย่างไรให้ประชาชนติดต่อและรับบริการจากภาครัฐได้โดยสะดวกในโลกยุคดิจิทัล
                  คำตอบก็คือ การปรับเปลี่ยนไปสู่ภาครัฐที่ทันสมัย
                  ใช้เทคโนโลยีดิจิทัลในการบริหารงานและให้บริการแก่ประชาชน
                  ซึ่งก็คือการก้าวไปสู่การเป็น รัฐบาลดิจิทัล (Digital
                  Government) นั่นเอง”
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-1-66.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Two */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-02.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การดำเนินการเปลี่ยนแปลงองค์การภาครัฐให้เกิดประสิทธิผล</h3>
                <p>
                  <Link
                    href="https://policywatch.thaipbs.or.th/article/environment-56"
                    target="-blank"
                  >
                    ทำไมแผนรับมือภัยพิบัติ จึงไร้ประสิทธิภาพ?
                  </Link>
                </p>
                <p>
                  รัฐบาลใช้งบประมาณกว่าร้อยล้านบาท ในปี 65
                  ติดตั้งระบบเตือนเพื่อรับภัยพิบัติทั่วประเทศ
                  แต่รายงานสหประชาชาติกลับพบว่า
                  ชุมชนท้องถิ่นในพื้นที่เสี่ยงของไทยมีเพียง 50% เท่านั้น
                  ที่ได้รับการอบรมเตรียมการป้องกันและรู้จักการเตือนภัย
                  ซึ่งถือเป็นปัญหาสำคัญของการเตรียมพร้อมรับมือภัยพิบัติของไทย
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-67-71.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="project-inner">
            {/* Project Three */}
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-03.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การดำเนินการเปลี่ยนแปลง
                  เพื่อเปลี่ยนผ่านไปสู่ความเป็นองค์กรดิจิทัล องค์กรเสมือนจริง
                  และองค์กรอัจฉริยะ
                </h3>
                <p>
                  <Link
                    href="https://aws.amazon.com/th/what-is/digital-transformation/"
                    target="-blank"
                  >
                    เหตุใดการเปลี่ยนผ่านสู่ระบบดิจิทัลจึงมีความสำคัญ
                  </Link>
                </p>
                <p>
                  คำว่า "การเปลี่ยนผ่านสู่ระบบดิจิทัล" อธิบายถึงการนำเทคโนโลยี
                  ความสามารถ และกระบวนการใหม่ ๆ
                  เข้ามาใช้เพื่อทำให้ยังคงสามารถแข่งขันได้ในภูมิทัศน์ทางเทคโนโลยีที่มีการเปลี่ยนแปลงอยู่ตลอดเวลา
                  หลังจากยุคการระบาดครั้งใหญ่
                  องค์กรต้องมีความสามารถที่จะปรับตัวได้อย่างรวดเร็วเพื่อให้เข้ากับการเปลี่ยนแปลงต่าง
                  ๆ
                </p>
                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-72-75.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Four */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ปัจจัยที่ส่งเสริมความสำเร็จของการดำเนินการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.adpt.news/2017/09/13/7-factors-affecting-major-changes-org/"
                    target="-blank"
                  >
                    7
                    ปัจจัยที่มีผลต่อการเปลี่ยนแปลงครั้งใหญ่จากความคิดเห็นของผู้บริหาร
                    2000 คน
                  </Link>
                </p>
                <p>
                  ในการสำรวจผู้บริหารในองค์กรทุกขนาดและทุกอุตสาหกรรมมากกว่า
                  2,000 ราย โดย McKinsey ในปี 2014
                  ตอนหนึ่งของรายงานได้กล่าวถึงปัจจัยที่เหล่าผู้บริหารให้ความเห็นว่าเป็นสิ่งสำคัญที่ช่วยให้การเปลี่ยนแปลงประสบความสำเร็จอย่างยั่งยืน
                  ซึ่งมีด้วยกันอยู่ 7 ข้อ ที่สรุปมาให้อ่านกันแล้ววันนี้
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-76-78.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Five */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การสร้างความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://www.psy.chula.ac.th/th/feature-articles/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3/"
                    target="-blank"
                  >
                    คุณพร้อมไหม? …นักจิตวิทยาพร้อมจะช่วย
                    การสร้างความพร้อมในการเปลี่ยนแปลงพฤติกรรมเพื่อส่งเสริมสุขภาพ
                  </Link>
                </p>
                <p>
                  ผลการวิจัยทางด้านพฤติกรรมสุขภาพจำนวนมากพบผลสอดคล้องกันว่า
                  การออกกำลังกายส่งผลดีต่อสุขภาพทั้งด้านร่างกาย จิตใจ
                  และสังคมของผู้ออกกำลังกาย เช่น ทำให้ร่างกายแข็งแรง
                  และมีอารมณ์สดชื่นแจ่มใส
                  การออกกำลังกายที่ต้องทำเป็นกิจกรรมกลุ่ม เช่น การตีแบดมินตัน
                  การเล่นบาส
                  ยังเป็นการเปิดโอกาสให้เราได้สร้างความรู้จักกับคนอื่นๆ
                  ที่มีความหลากหลาย คนต่างอาชีพ ต่างวัยมากขึ้น
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-79-82.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project six */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ตัวอย่างแบบสำรวจความพร้อมในการเปลี่ยนแปลง</h3>
                <p>
                  <Link
                    href="https://surveysparrow.com/blog/change-management-survey-questions/"
                    target="-blank"
                  >
                    แบบสำรวจการจัดการการเปลี่ยนแปลงมากกว่า 100 ข้อ
                  </Link>
                </p>
                <p>
                  แบบสำรวจการจัดการการเปลี่ยนแปลงแบบสนทนาได้รับอัตราการตอบสนองสูงสุด
                  สร้างแบบสำรวจได้อย่างง่ายดายด้วยเทมเพลตสำเร็จรูป
                  นี่คือแบบสำรวจข้อเสนอแนะเกี่ยวกับการจัดการการเปลี่ยนแปลงที่จะช่วยคุณในกระบวนการรวบรวมข้อเสนอแนะและดำเนินการตามนั้น
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-83-85.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project seven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การต่อต้านการเปลี่ยนแปลง (Resistance to Change)</h3>
                <p>
                  <Link
                    href="https://www.gotoknow.org/posts/667314"
                    target="-blank"
                  >
                    การต่อต้านการเปลี่ยนแปลงคืออะไร องค์กรควรรับมืออย่างไร
                  </Link>
                </p>
                <p>
                  มื่อจะมีการเปลี่ยนแปลงใด ๆ เกิดขึ้น
                  ย่อมมีการต่อต้านจากผู้ที่ได้รับผลกระทบจากการเปลี่ยนแปลง คือ
                  ในระยะแรกที่เป็นการสร้างการยอมรับ
                  จะมีการต่อต้านออกมาในลักษณะสร้างกลไกป้องกันตนเอง เช่น
                  พยายามปฏิเสธโดยกล่าวว่า ที่เป็นอยู่ขณะนี้ก็ดีอยู่แล้ว
                  ไม่เห็นมีปัญหาอะไร ส่วนในระยะดำเนินการเปลี่ยนแปลง
                  การต่อต้านจะเพิ่มความรุนแรงมากขึ้น
                  เช่นการไม่ร่วมมือหรืออาจประท้วงเป็นต้น
                  สาเหตุของการต่อต้านการเปลี่ยนแปลง มาจากเหตุผลหลายอย่าง
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-86-89.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eight */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การเอาชนะการต่อต้านการเปลี่ยนแปลง (Overcoming Resistance to
                  Change)
                </h3>
                <p>
                  <Link
                    href="https://www.betterup.com/blog/resistance-to-change"
                    target="-blank"
                  >
                    การเอาชนะความต้านทานต่อการเปลี่ยนแปลงภายในองค์กรของคุณ
                  </Link>
                </p>
                <p>
                  เคยได้ยินคำพูดที่ว่า “สิ่งเดียวที่คงที่คือการเปลี่ยนแปลง” ไหม?
                  คำกล่าวนี้เริ่มจะกลายเป็นเรื่องซ้ำซาก
                  แต่ก็เป็นความจริงเช่นกันการเปลี่ยนแปลงเป็นสิ่งที่หลีกเลี่ยงไม่ได้ในองค์กร
                  การเปลี่ยนแปลงสามารถเกิดขึ้นได้ในหลายรูปแบบ
                  แต่ถึงแม้จะมีการเปลี่ยนแปลงอย่างต่อเนื่อง
                  แต่ผู้คนส่วนใหญ่กลับต่อต้านการเปลี่ยนแปลง
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-90-92.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Nine */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การสร้างวิสัยทัศน์ในการเปลี่ยนแปลง (Creating a Vision to
                  Change)
                </h3>
                <p>
                  <Link
                    href="https://www.splunk.com/en_us/blog/learn/kotter-8-steps-change.html"
                    target="-blank"
                  >
                    การเปลี่ยนแปลงเกิดขึ้นทุกที่และไม่หยุดนิ่ง สำหรับองค์กร
                    การเปลี่ยนแปลงไม่ใช่เรื่องง่ายเลย
                    เส้นทางหนึ่งที่จะก้าวไปข้างหน้าคือกระบวนการ 8 ขั้นตอนของ
                    Kotter
                  </Link>
                </p>
                <p>
                  กระบวนการ 8 ขั้นตอนของ Kotter
                  หรือที่เรียกอีกอย่างว่าแบบจำลองการเปลี่ยนแปลงของ Kotter
                  เป็นกรอบการทำงานสำหรับการจัดการและการนำการเปลี่ยนแปลงขององค์กรไปใช้
                  แบบจำลองนี้ ได้รับการพัฒนาโดย John
                  Kotterโดยประกอบด้วยขั้นตอนที่แตกต่างกัน 8
                  ขั้นตอนที่องค์กรสามารถปฏิบัติตามเพื่อนำทางการเปลี่ยนแปลงที่สำคัญได้อย่างประสบความสำเร็จ
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-93-98.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Ten */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>ขั้นตอนการกำหนดวิสัยทัศน์ (Steps of Creating a Vision)</h3>
                <p>
                  <Link
                    href="https://www.interactsoftware.com/blog/7-simple-steps-defining/"
                    target="-blank"
                  >
                    7 ขั้นตอนในการกำหนดและเขียนคำชี้แจงวิสัยทัศน์ของบริษัท
                  </Link>
                </p>
                <p>
                  วิสัยทัศน์ของบริษัทเป็นเป้าหมายระยะยาวที่สร้างแรงบันดาลใจซึ่งกำหนดทิศทางของธุรกิจ
                  คำชี้แจงวิสัยทัศน์ที่ร่างขึ้นอย่างดีสามารถเป็นเครื่องมือที่มีประสิทธิภาพในการดึงดูดและรักษาบุคลากรที่มีความสามารถสูง
                  บทความนี้จะอธิบายวิธีการกำหนดและสร้างคำชี้แจงวิสัยทัศน์ของบริษัทที่จะทำให้คุณเป็นนายจ้างที่ประสบความสำเร็จ
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-99-102.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Eleven */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การค้นหาผู้มีส่วนได้ส่วนเสีย (Identifying Key Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://www.productplan.com/glossary/stakeholder-analysis/"
                    target="-blank"
                  >
                    การวิเคราะห์ผู้มีส่วนได้ส่วนเสียคืออะไร?
                  </Link>
                </p>
                <p>
                  เมื่อพูดถึงโครงการขององค์กรใดๆ
                  บุคลากรภายในและทีมงานทั้งหมดที่โครงการจะเกี่ยวข้องหรือส่งผลกระทบเรียกว่าผู้มีส่วนได้ส่วนเสียการวิเคราะห์ผู้มีส่วนได้ส่วนเสียเป็นกระบวนการระบุบุคคลเหล่านี้ก่อนเริ่มโครงการ
                  จัดกลุ่มตามระดับการมีส่วนร่วม ความสนใจ
                  และอิทธิพลที่มีต่อโครงการ
                  และกำหนดวิธีที่ดีที่สุดในการดึงดูดและสื่อสารกลุ่มผู้มีส่วนได้ส่วนเสียแต่ละกลุ่มเหล่านี้ตลอดโครงการ
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-103-106.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Twelve */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  การโน้มน้าวผู้มีส่วนได้ส่วนเสีย (Influencing Stakeholders)
                </h3>
                <p>
                  <Link
                    href="https://www.linkedin.com/advice/3/what-best-strategies-influence-stakeholders-across-different"
                    target="-blank"
                  >
                    กลยุทธ์ที่ดีที่สุดในการโน้มน้าวผู้มีส่วนได้ส่วนเสียในแต่ละฟังก์ชันและระดับคืออะไร
                  </Link>
                </p>
                <p>
                  การโน้มน้าวใจเป็นทักษะสำคัญสำหรับผู้นำ
                  โดยเฉพาะอย่างยิ่งเมื่อพวกเขาต้องร่วมมือกับผู้มีส่วนได้ส่วนเสียจากหลายฟังก์ชันและหลายระดับ
                  ไม่ว่าคุณจะทำงานในโครงการ ริเริ่มการเปลี่ยนแปลง
                  หรือตัดสินใจเชิงกลยุทธ์
                  คุณจำเป็นต้องโน้มน้าวใจผู้อื่นให้สนับสนุนเป้าหมายและวิสัยทัศน์ของคุณ
                  แต่คุณจะทำสิ่งนั้นได้อย่างไรหากไม่มีอำนาจหรืออำนาจอย่างเป็นทางการ
                  ต่อไปนี้คือกลยุทธ์บางประการที่จะช่วยให้คุณโน้มน้าวผู้มีส่วนได้ส่วนเสียได้อย่างมีประสิทธิภาพและถูกต้องตามจริยธรรม
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-107-110.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Thirteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>
                  คณะทำงานที่รับผิดชอบการดำเนินการเปลี่ยนแปลง (Change-Management
                  Structures)
                </h3>
                <p>
                  <Link
                    href="https://www.dmit.co.th/th/asana-updates-th/what-is-change-management/"
                    target="-blank"
                  >
                    รู้จัก Change Management
                    เตรียมความพร้อมสู่การเปลี่ยนแปลงที่ยั่งยืน
                  </Link>
                </p>
                <p>
                  การเปลี่ยนแปลงเป็นสิ่งสำคัญที่ช่วยให้องค์กรเติบโต
                  ไม่ว่าจะเป็นการนำเครื่องมือใหม่ กลยุทธ์ใหม่ หรือการบุกตลาดใหม่
                  การเปลี่ยนแปลงเล็ก ๆ อาจเป็นไปได้ง่าย
                  แต่การเปลี่ยนแปลงองค์กรครั้งใหญ่จำเป็นที่จะต้องมีการวางแผนที่เหมาะสม
                  มิฉะนั้นอาจนำไปสู่ความวุ่นวายและประสิทธิภาพขององค์กรที่ลดลง
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-111-114.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          {/* Project Fourteen */}
          <div className="project-inner">
            <div className="row">
              <div className="col-md-7">
                <a href="#">
                  <img
                    className="img-fluid rounded mb-3 mb-md-0"
                    src="images/portfolio-big-04.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-md-5">
                <h3>การประคับประคองการเปลี่ยนแปลง (Sustaining Momentum)</h3>
                <p>
                  <Link
                    href="https://www.phyathai.com/th/article/3214-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%94%E0%B8%B9%E0%B9%81%E0%B8%A5%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%B1%E0%B8%9A%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%84%E0%B8%AD?srsltid=AfmBOooKeAbOd8XFM8vZEJoojE0GELDuL24OPbRe90WT6PX1bpmmoS4h"
                    target="-blank"
                  >
                    การดูแลแบบประคับประคอง (Palliative Care)
                    สำหรับผู้ป่วยและครอบครัว
                  </Link>
                </p>
                <p>
                  การดูแลแบบประคับประคอง (Palliative Care)
                  เป็นที่รู้จักกว้างขวางในต่างประเทศ โดยเฉพาะในประเทศตะวันตก
                  และกำลังเริ่มเป็นที่รู้จักมากขึ้นในประเทศไทย
                  แต่การดูแลผู้ป่วยกลุ่มนี้โดยเฉพาะในช่วงใกล้เสียชีวิต
                  ยังจำเป็นต้องสร้างความรู้ความเข้าใจให้มากขึ้น
                  เพื่อให้ผู้ป่วยและครอบครัวไม่ตื่นตระหนก เข้าใจ
                  และรับมือกับอาการที่เกิดขึ้นได้
                </p>

                <a
                  className="btn btn-primary"
                  href="images/change/change_processing-115-119.pdf"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  ศึกษารายละเอียดเพิ่มเติม
                  <span className="glyphicon glyphicon-chevron-right" />
                </a>
              </div>
            </div>
            {/* /.row */}
          </div>
          <hr />
          <div className="pagination_bar">
            {/* Pagination */}
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">«</span>
                  <span className="sr-only">Previous</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">»</span>
                  <span className="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* /.container */}
      </>
    </div>
  );
}
