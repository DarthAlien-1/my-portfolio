export default function Portfolio() {
  return (
    <main className="min-h-screen bg-zinc-50 p-8 md:p-16 font-sans text-zinc-900">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* Header Section */}
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">JOSE FERNANDO B. CLEMENTE</h1>
          <h2 className="text-xl text-zinc-600 font-medium">
            Bachelor of Science in Computer Engineering
          </h2>
          <p className="text-zinc-600 leading-relaxed max-w-2xl">
            I am a fresh graduate starting to build my career, specializing in full-stack web development, system architecture, and technical support. I focus on building efficient, data-driven tools to streamline operations and solve complex user problems.
          </p>
        </header>

        {/* Skills Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-zinc-200 pb-2">Technical Skills</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-zinc-700">
            <li>Next.js & React</li>
            <li>TypeScript</li>
            <li>Prisma ORM</li>
            <li>PostgreSQL & Supabase</li>
            <li>Tailwind CSS</li>
            <li>Git & Vercel Deployment</li>
          </ul>
        </section>

        {/* Featured Live Project */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-zinc-200 pb-2">Featured Project</h3>
          <div className="bg-white p-6 border border-zinc-200 rounded-lg shadow-sm space-y-3">
            <h4 className="text-lg font-bold">Customer Inquiry Management Portal</h4>
            <p className="text-zinc-600 text-sm leading-relaxed">
              A full-stack Next.js application integrated with a live PostgreSQL database via Supabase and Prisma. Features a public-facing intake form and a secure internal dashboard equipped with dynamic CRUD operations and state-managed UI components.
            </p>
            <a 
              href="https://customer-inquiry-portal.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-blue-600 font-medium hover:underline"
            >
              View Live Application ↗
            </a>
          </div>
        </section>

        {/* Projects & Google Drive Link */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold border-b border-zinc-200 pb-2">Academic Project Gallery</h3>
          <p className="text-zinc-600">
            A comprehensive collection of my engineering coursework, technical implementations, and system designs.
          </p>
          <a 
            href="https://drive.google.com/drive/u/0/folders/1BVOvI4Apksyhtq5KukyvDw3Df7YTKI1t" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-3 bg-zinc-900 text-white font-semibold rounded-md shadow-sm hover:bg-zinc-800 transition-colors"
          >
            View Projects on Google Drive ↗
          </a>
        </section>

      </div>
    </main>
  );
}