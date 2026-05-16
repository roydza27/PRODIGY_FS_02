const metrics = [
   {
      id: 1,
      value: "10",
      suffix: "+",
      label: "Protected Routes",
      description: "Securely restrict access to authenticated users across the application."
   },
   {
      id: 2,
      value: "256",
      suffix: "-bit",
      label: "Password Security",
      description: "Industry-standard encryption and hashing for secure credential storage."
   },
   {
      id: 3,
      value: "24",
      suffix: "/7",
      label: "Authentication Access",
      description: "Reliable login and registration systems available around the clock."
   },
   {
      id: 4,
      value: "99.9",
      suffix: "%",
      label: "System Reliability",
      description: "Consistent authentication performance with highly available infrastructure."
   }
];

export default function StatsSection() {

   return (
      <section className="bg-[#09090B] py-8 px-4 md:px-8 md:py-12 dark:bg-[#111113]">
         <div className="max-w-7xl mx-auto flex flex-col items-center justify-center">
            <div className="text-center mb-12 md:mb-16">
               <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[0.95] text-[#FAFAFA]">
                  Application Metrics
               </h2>
            </div>

            <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
               {metrics.map((item) => (
                  <li key={item.id} className="text-center">
                     <dl className="flex flex-col">
                        <dt className="text-[#FAFAFA] text-base font-semibold dark:text-[#FAFAFA]">
                           {item.label}
                        </dt>
                        <dd className="-order-1 text-[#FAFAFA] font-heading text-[clamp(2rem,5vw,4rem)] font-bold tracking-tight leading-[0.95] mb-6 dark:text-[#FAFAFA]">
                           {item.value}
                           <span className="text-[#FAFAFA]">{item.suffix}</span>
                        </dd>
                        <dd className="text-sm text-[#A1A1AA] mt-3 leading-relaxed dark:text-[#A1A1AA]">
                           {item.description}
                        </dd>
                     </dl>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}