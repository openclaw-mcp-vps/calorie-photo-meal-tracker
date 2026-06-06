export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 flex flex-col gap-20">

      {/* Hero */}
      <section className="flex flex-col items-center text-center gap-6">
        <div className="text-5xl">📸</div>
        <h1 className="text-4xl font-bold text-white leading-tight">
          Take a photo,<br />
          <span className="text-[#58a6ff]">get instant calorie count</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl">
          Snap your meal and our AI instantly identifies every ingredient,
          calculates calories, and breaks down protein, carbs, and fat — no logging, no guessing.
        </p>
        <a
          href={checkoutUrl}
          className="mt-2 inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-lg transition-colors"
        >
          Start Tracking — $7/mo
        </a>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-[#8b949e]">
          <li>✓ Instant AI analysis</li>
          <li>✓ Full macro breakdown</li>
          <li>✓ Daily intake dashboard</li>
          <li>✓ Cancel anytime</li>
        </ul>
      </section>

      {/* Pricing */}
      <section className="flex flex-col items-center gap-6">
        <h2 className="text-2xl font-bold text-white">Simple Pricing</h2>
        <div className="w-full max-w-sm border border-[#30363d] rounded-2xl p-8 flex flex-col gap-5 bg-[#161b22]">
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">$7</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm">Everything you need to hit your nutrition goals.</p>
          <ul className="flex flex-col gap-2 text-sm">
            {[
              "Unlimited meal photo scans",
              "AI-powered calorie & macro estimates",
              "Daily & weekly intake summaries",
              "Meal history & trends",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-center text-[#8b949e]">No commitment. Cancel anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white text-center">FAQ</h2>
        <div className="flex flex-col gap-4">
          {[
            {
              q: "How accurate is the calorie estimate?",
              a: "Our AI uses OpenAI Vision to identify foods and portion sizes, typically within 10–15% of actual values — on par with manual food logging apps."
            },
            {
              q: "What kinds of meals can I scan?",
              a: "Any meal you can photograph: home-cooked dishes, restaurant plates, packaged foods, smoothies, and more. The clearer the photo, the better the result."
            },
            {
              q: "Can I cancel my subscription?",
              a: "Yes, cancel anytime from your billing portal. You keep access until the end of your billing period with no questions asked."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
