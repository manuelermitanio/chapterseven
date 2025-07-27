import CountUp from "react-countup";

export default function AnalyticsSection() {
  return (
    <section className="analytics-section">
      <div className="analytics-container">
         <p className="analytics-heading">
          Our Data Analytics
        </p>
        <p className="analytics-subheading">
          Passion, community, and storytelling — here's how far we've come.
        </p>

        <div className="analytics-grid">
          <div className="analytics-card">
            <h3 className="analytics-number text-3xl font-bold">
              <CountUp end={100000} duration={1.5} separator="," enableScrollSpy scrollSpyDelay={300} />
            </h3>
            <p className="analytics-label">Active Users</p>
          </div>

          <div className="analytics-card">
            <h3 className="analytics-number text-3xl font-bold">
              <CountUp end={4516} duration={1.5} separator="," enableScrollSpy scrollSpyDelay={300} />
            </h3>
            <p className="analytics-label">Published Stories</p>
          </div>

          <div className="analytics-card">
            <h3 className="analytics-number text-3xl font-bold">
              <CountUp end={87} duration={1.5} suffix="%" enableScrollSpy scrollSpyDelay={300} />
            </h3>
            <p className="analytics-label">Reader Engagement Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
}
