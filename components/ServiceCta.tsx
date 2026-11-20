import { AuditTrigger } from "@/components/AuditTrigger";
import { ConsultationTrigger } from "@/components/ConsultationTrigger";

export function ServiceCta({
  title = "Not sure this is the right fit?",
  body = "Book a free consultation, or claim a written audit of your current site.",
  location = "service_cta",
}: {
  title?: string;
  body?: string;
  location?: string;
}) {
  return (
    <div className="rounded-2xl border border-line bg-forge-plane px-6 py-10 text-ink sm:px-10">
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink">
        {title}
      </h2>
      <p className="mt-3 max-w-lg text-steel">{body}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <ConsultationTrigger
          location={location}
          className="btn-heat rounded-md px-5 py-3 text-sm font-semibold text-ink"
        >
          Book a free consultation
        </ConsultationTrigger>
        <AuditTrigger
          location={location}
          className="btn-ghost rounded-md px-5 py-3 text-sm font-semibold text-ink"
        >
          Get my free audit
        </AuditTrigger>
      </div>
    </div>
  );
}
