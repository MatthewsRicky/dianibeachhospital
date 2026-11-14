import type { ReactNode } from "react";

type ContentSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  background?: "white" | "light";
  className?: string;
  id?: string;
};

export default function ContentSection({
  eyebrow,
  title,
  description,
  children,
  background = "white",
  className = "",
  id,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${
        background === "light" ? "bg-slate-50" : "bg-white"
      } ${className}`}
    >
      <div className="container-site">
        {(eyebrow || title || description) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}

            {title && <h2 className="section-heading mt-3">{title}</h2>}

            {description && (
              <p className="section-description mt-4">{description}</p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
