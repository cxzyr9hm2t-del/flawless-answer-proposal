import Link from 'next/link';

export default function FlawlessAnswerPage() {
  const tiers = [
    { name: 'Foundation', price: '$275', period: '/mo', features: ['Inbox monitoring & management', 'Email response drafting', '1 Business Day Guarantee', 'Monthly performance summary', 'Brand voice onboarding'] },
    { name: 'Growth', price: '$350', period: '/mo', features: ['Everything in Foundation', 'Instagram DM management', 'Facebook message management', 'Lead tagging & tracking', 'Bi-weekly check-in calls'] },
    { name: 'Expansion', price: '$450', period: '/mo', highlight: true, features: ['Everything in Growth', 'Website chat integration', 'Custom response templates', 'Priority escalation protocol', 'Weekly performance reports'] },
    { name: 'Executive', price: '$575', period: '/mo', features: ['Everything in Expansion', 'Dedicated communication strategist', 'CRM notes & follow-up management', 'Proposal & quote response support', 'On-demand strategy consulting'] },
  ];

  return (
    <main style={{ backgroundColor: '#0A0A0A', color: '#FAFAFA', fontFamily: 'sans-serif', minHeight: '100vh' }}>
      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, backgroundColor: 'rgba(10,10,10,0.95)', borderBottom: '1px solid #1A1A1A', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: '#D4AF37', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Flawless Answer</span>
        <a href="#contact" style={{ backgroundColor: '#D4AF37', color: '#0A0A0A', padding: '0.5rem 1.25rem', borderRadius: '0.5rem', fontWeight: 600, fontSize: '0.875rem' }}>Apply Now</a>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
        <span style={{ border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', padding: '0.375rem 1rem', borderRadius: '9999px', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block' }}>Modern Communication Operations</span>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em', maxWidth: '900px', marginBottom: '1.5rem' }}>
          Turn Qualified Business Owners<br />
          <span style={{ color: '#D4AF37' }}>Into Paying Clients.</span>
        </h1>
        <p style={{ color: '#A0A0A0', fontSize: '1.125rem', maxWidth: '500px', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          Professional Inbox Management&nbsp;•&nbsp;1 Business Day Response Guarantee
        </p>
        <a href="#contact" style={{ backgroundColor: '#D4AF37', color: '#0A0A0A', padding: '1rem 2.5rem', borderRadius: '0.75rem', fontWeight: 700, fontSize: '1rem', display: 'inline-block', boxShadow: '0 0 30px rgba(212,175,55,0.25)' }}>
          Apply as a Founding Client →
        </a>
        <p style={{ color: '#A0A0A0', fontSize: '0.75rem', marginTop: '1rem', letterSpacing: '0.1em' }}>Limited founding client spots. Onboarding fees waived.</p>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '5rem 2rem', backgroundColor: '#111111', maxWidth: '900px', margin: '0 auto' }}>
        <p style={{ color: '#D4AF37', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Meet the Founder</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem' }}>Shanna Brathwaite</h2>
        <div style={{ width: '3rem', height: '2px', backgroundColor: '#D4AF37', marginBottom: '1.5rem' }}></div>
        <p style={{ color: '#A0A0A0', lineHeight: 1.8, marginBottom: '1rem' }}>With over 20 years of hands-on experience in customer service and client communications, Shanna has spent two decades mastering what it means for a brand to truly listen, respond, and convert.</p>
        <p style={{ color: '#A0A0A0', lineHeight: 1.8, marginBottom: '1rem' }}>Her formal training in Office Administration gave her the systems-thinking backbone that separates Flawless Answer from anyone simply "managing a DM inbox." Every workflow, every response, every touchpoint is architected — not improvised.</p>
        <p style={{ color: '#A0A0A0', lineHeight: 1.8 }}>As a mother of three, Shanna knows firsthand that flawless organization and genuine empathy are not optional extras in business — they are the foundation.</p>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#D4AF37', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Investment</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1.5rem' }}>Choose Your Operations Level</h2>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', backgroundColor: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.4)', borderRadius: '1rem', padding: '0.75rem 1.5rem' }}>
            <span style={{ color: '#D4AF37', fontSize: '0.875rem', fontWeight: 500 }}>⭐ Founding Client Opportunity: Onboarding Fees Waived for a Limited Time ⭐</span>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {tiers.map((tier) => (
            <div key={tier.name} style={{ backgroundColor: '#0A0A0A', border: tier.highlight ? '1px solid #D4AF37' : '1px solid #2A2A2A', borderRadius: '1rem', padding: '1.75rem', display: 'flex', flexDirection: 'column', boxShadow: tier.highlight ? '0 0 30px rgba(212,175,55,0.2)' : 'none', transform: tier.highlight ? 'scale(1.02)' : 'none' }}>
              {tier.highlight && <div style={{ backgroundColor: '#D4AF37', color: '#0A0A0A', fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 1rem', borderRadius: '9999px', textAlign: 'center', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Most Popular</div>}
              <span style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{tier.name}</span>
              <div style={{ marginTop: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#FAFAFA' }}>{tier.price}</span>
                <span style={{ color: '#A0A0A0', fontSize: '0.875rem' }}>{tier.period}</span>
              </div>
              <hr style={{ border: 'none', borderTop: '1px solid #2A2A2A', marginBottom: '1.25rem' }} />
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                {tier.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#FAFAFA' }}>
                    <span style={{ color: '#D4AF37', marginTop: '2px' }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" style={{ marginTop: '1.5rem', display: 'block', textAlign: 'center', padding: '0.875rem', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.875rem', backgroundColor: tier.highlight ? '#D4AF37' : 'transparent', color: tier.highlight ? '#0A0A0A' : '#D4AF37', border: tier.highlight ? 'none' : '1px solid rgba(212,175,55,0.4)' }}>
                Apply for {tier.name}
              </a>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', color: '#A0A0A0', fontSize: '0.875rem', marginTop: '2rem' }}>All plans require a <strong style={{ color: '#FAFAFA' }}>3-month minimum commitment</strong> to ensure workflow mastery.</p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '5rem 2rem', backgroundColor: '#111111' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#D4AF37', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Apply Now</p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, marginBottom: '1rem' }}>Ready to Elevate Your Communications?</h2>
          <p style={{ color: '#A0A0A0', marginBottom: '2rem' }}>Email us directly to get started as a Founding Client.</p>
          <a href="mailto:1flawlessanswer@gmail.com" style={{ backgroundColor: '#D4AF37', color: '#0A0A0A', padding: '1rem 2.5rem', borderRadius: '0.75rem', fontWeight: 700, fontSize: '1rem', display: 'inline-block' }}>
            1flawlessanswer@gmail.com
          </a>
          <p style={{ color: '#A0A0A0', marginTop: '1rem', fontSize: '0.875rem' }}>📞 613-453-0756</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1A1A1A', padding: '2rem', textAlign: 'center' }}>
        <span style={{ color: '#D4AF37', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', fontSize: '0.875rem' }}>Flawless Answer</span>
        <p style={{ color: '#A0A0A0', fontSize: '0.75rem', marginTop: '0.5rem' }}>© 2026 Flawless Answer. All rights reserved.</p>
      </footer>
    </main>
  );
      }
