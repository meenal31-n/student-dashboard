
export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-6 md:px-8">

    <section className="max-w-5xl mx-auto">
     <h1 className="text-2xl md:text-3xl font-bold mb-8">
      Settings
     </h1>

    <article className="bg-zinc-900    rounded-2xl p-6 mb-6">
      <h2 className="text-xl font-bold mb-4">
        General
      </h2>

      <p className="text-zinc-400 mb-6">
        You can log in using your email, phone number, or username.
      </p>

      <section className="space-y-4">
        <section className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-zinc-800 pb-3">
        <span >Username</span>
        <span className="text-zinc-400 " >aaryan_909</span>
      </section>


      <section className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-zinc-800 pb-3">       
        <span>Email</span>
        <span className="text-zinc-400 ">
          aaryanjo****@gmail.com
        </span>
      </section>

      <section className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-zinc-800 pb-3">       
        <span>Phone Number</span>
        <span className="text-zinc-400">
          +91 941****292
        </span>
      </section>

      <section className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-zinc-800 pb-3flex justify-between">       
        <span>Password</span>
        <span className="text-zinc-400">
          *******
        </span>
      </section>

      </section>
    </article>

        <article className="bg-zinc-900 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">
            Social Accounts
          </h2>

          <p className="text-zinc-400 mb-6">
            Connect a social account to sign in.
          </p>

          <section className="space-y-4">
            <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span>Google</span>
              <button className="bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-lg w-full sm:w-auto">
                Connect
              </button>
            </section>

            <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span>GitHub</span>
              <button className="bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-lg w-full sm:w-auto">
                Connect
              </button>
            </section>

            <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span>LinkedIn</span>
              <button className="bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-lg w-full sm:w-auto">
                Connect
              </button>
            </section>

            <section className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <span>Apple</span>
              <button className="bg-zinc-800 hover:bg-zinc-700 transition px-4 py-2 rounded-lg w-full sm:w-auto">
                Connect
              </button>
            </section>

          </section>
        </article>

        <article className="bg-zinc-900 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">
            Notifications
          </h2>

          <section className="space-y-4">

            <label className="flex items-center justify-between gap-4">
              <span>Email Notifications</span>
              <input type="checkbox" className="w-5 h-5"/>
            </label>

            <label className="flex items-center justify-between gap-4">
              <span>Course Updates</span>
              <input type="checkbox" className="w-5 h-5"/>
            </label>

            <label className="flex items-center justify-between gap-4">
              <span>Weekly Reports</span>
              <input type="checkbox" className="w-5 h-5"/>
            </label>

            <label className="flex items-center justify-between gap-4">
              <span>Learning Reminders</span>
              <input type="checkbox" className="w-5 h-5"/>
            </label>

          </section>
        </article>
      </section>

    </main>
  );
}