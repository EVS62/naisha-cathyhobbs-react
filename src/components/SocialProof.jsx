import './SocialProof.css';

const stats = [
  { num: '12+', label: 'Years of Experience' },
  { num: '200+', label: 'Projects Completed' },
  { num: 'NYC', label: 'Tri-State Region' },
  { num: '5★', label: 'Houzz Rating' },
  { num: '100%', label: 'Client Satisfaction' },
];

export default function SocialProof() {
  return (
    <div className="social-proof">
      <div className="social-proof__inner">
        {stats.map((s, i) => (
          <>
            <div key={s.label} className="social-proof__item">
              <div className="social-proof__num">{s.num}</div>
              <div className="social-proof__label">{s.label}</div>
            </div>
            {i < stats.length - 1 && <div key={`div-${i}`} className="social-proof__divider" />}
          </>
        ))}
      </div>
    </div>
  );
}
