import React  from "react";
 
const CTA = () => {
  return (
    <section id="cta" className="cta px-4 py-8 xl:px-24 xl:py-12">
        <div className="text-white">
          <div className="text-center">
            <h3 className="text-3xl xl:text-4xl font-bold font-[Raleway]">
              why choose us?
            </h3>
            <p className="my-4 xl:my-8 text-sm xl:text-base">
              Our well-crafted Web design and development teams analyze and
              understand each project requirement in-depth to bring
              high-performing solutions that are truly unique to your business
              challenges and accelerate your business toward success.
            </p>
            <a
              className="cta-btn font-semibold text-base xl:text-xl border-2 py-2 xl:py-3 px-4 xl:px-6 border-white rounded-md hover:border-0 hover:text-black hover:bg-[#ffc451]"
              href="#"
            >
              Call To Action
            </a>
          </div>
        </div>
      </section>
  )
}

export default CTA