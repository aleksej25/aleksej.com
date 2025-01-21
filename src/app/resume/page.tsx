export default function Resume() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-6">My Resume</h1>
      <embed
        src="/static/Aleksej_Zabijakin_Resume.pdf"
        width="100%"
        height="800px"
        type="application/pdf"
        className="border-2 border-gray-300 rounded"
      />
    </div>
  );
}
