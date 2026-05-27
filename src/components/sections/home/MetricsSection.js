import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Container from '@/components/ui/Container'
import { metrics } from '@/lib/data/metrics'
import { stagger, fadeUp } from '@/lib/animations'

export default function MetricsSection() {
  return (
    <section className="py-20 bg-brand-gray-50 border-y border-brand-gray-200">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-brand-gray-200">
          {metrics.map((metric, i) => (
            <ScrollReveal key={metric.label} delay={i * 0.08} className="px-8 py-10 first:pl-0 last:pr-0">
              <div className="stat-number text-5xl lg:text-[3.5rem] text-brand-black mb-2">
                <AnimatedCounter
                  value={metric.value}
                  suffix={metric.suffix}
                  isDecimal={metric.isDecimal}
                />
              </div>
              <div className="text-sm font-semibold text-brand-black mb-1">{metric.label}</div>
              <div className="text-xs text-brand-gray-500 leading-relaxed">{metric.description}</div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
