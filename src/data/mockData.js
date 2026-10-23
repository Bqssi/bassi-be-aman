* {
  box-sizing: border-box;
}

:root {
  --olive: #1f5d3b;
  --olive-soft: #eaf5ee;
  --green: #2b8a5e;
  --dark-blue: #102a43;
  --dark: #1a1a1a;
  --muted: #667085;
  --border: #dfe7e2;
  --white: #ffffff;
  --warning: #f3b13a;
  --success: #1f9d65;
  --shadow: 0 12px 30px rgba(16, 42, 67, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Cairo', sans-serif;
  background: linear-gradient(180deg, #f6faf7 0%, #eef7f2 100%);
  color: var(--dark);
  direction: rtl;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.85);
  border-bottom: 1px solid var(--border);
}

.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  min-height: 84px;
}

.brand-box {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-box strong {
  display: block;
  font-size: 1.3rem;
  color: var(--dark-blue);
}

.brand-box small {
  display: block;
  color: var(--muted);
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--olive), var(--green));
  color: var(--white);
  font-weight: 800;
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.nav-item {
  padding: 10px 16px;
  border-radius: 999px;
  color: var(--dark-blue);
  font-weight: 600;
  transition: 0.2s ease;
}

.nav-item.active,
.nav-item:hover {
  background: var(--olive-soft);
  color: var(--olive);
}

.page-shell {
  padding: 28px 0 56px;
}

.hero {
  padding: 36px 0 12px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 24px;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  background: var(--olive-soft);
  color: var(--olive);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 14px;
}

.hero h1,
.section-head h2,
.page-header h2,
.panel h2,
.panel h3 {
  margin: 0 0 12px;
  color: var(--dark-blue);
}

.hero h1 {
  font-size: clamp(2.2rem, 5vw, 4rem);
  line-height: 1.2;
}

.hero p {
  font-size: 1.08rem;
  line-height: 1.9;
  color: var(--muted);
  max-width: 640px;
}

.hero-actions,
.mini-role-row,
.student-actions,
.ticket-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 22px;
}

.primary-btn,
.secondary-btn,
.small-btn,
button {
  border: 0;
  border-radius: 12px;
  font-weight: 700;
  transition: 0.2s ease;
  cursor: pointer;
}

.primary-btn,
button:not(.switch) {
  background: linear-gradient(135deg, var(--olive), var(--green));
  color: var(--white);
  padding: 12px 18px;
}

.secondary-btn {
  padding: 12px 18px;
  background: var(--white);
  color: var(--olive);
  border: 1px solid var(--border);
}

.small-btn {
  padding: 9px 12px;
  font-size: 0.82rem;
}

.small-btn.alt {
  background: var(--dark-blue);
  color: var(--white);
}

.mini-role-row a {
  color: var(--dark-blue);
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 10px;
  background: rgba(31, 93, 59, 0.08);
}

.hero-panel {
  background: linear-gradient(135deg, #102a43 0%, #1f5d3b 100%);
  border-radius: 26px;
  padding: 32px 26px;
  box-shadow: var(--shadow);
  min-height: 320px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.stat-pill {
  width: fit-content;
  background: rgba(255, 255, 255, 0.14);
  padding: 9px 12px;
  border-radius: 999px;
}

.mini-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.mini-card {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 18px 12px;
  text-align: center;
}

.mini-card strong {
  display: block;
  font-size: 1.8rem;
}

.features,
.faq,
.contact-cta {
  padding-top: 32px;
}

.section-head {
  margin-bottom: 20px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.feature-card,
.panel,
.cta-box,
.ticket-card,
.stat-box {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.feature-card {
  padding: 24px 18px;
}

.feature-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: var(--olive-soft);
  font-size: 1.6rem;
  margin-bottom: 14px;
}

.feature-card h3 {
  margin: 0 0 8px;
  color: var(--dark-blue);
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
}

.faq-list {
  display: grid;
  gap: 14px;
}

.faq-list details {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: var(--shadow);
}

.faq-list summary {
  cursor: pointer;
  font-weight: 700;
  color: var(--dark-blue);
  list-style: none;
}

.faq-list p {
  color: var(--muted);
  line-height: 1.8;
  margin: 14px 0 0;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 28px 26px;
}

.dashboard {
  display: grid;
  gap: 24px;
}

.page-header {
  padding-top: 8px;
}

.dashboard-grid {
  display: grid;
  gap: 22px;
}

.two-col {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.panel {
  padding: 22px;
}

.info-list,
.child-profile {
  display: grid;
  gap: 12px;
}

.info-list > div,
.row {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.info-list span,
.row span,
.ticket-card small,
label {
  color: var(--muted);
}

.subscription-box {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.subscription-box div {
  padding: 16px;
  background: var(--olive-soft);
  border-radius: 16px;
}

.subscription-box span {
  display: block;
  color: var(--muted);
  margin-bottom: 8px;
}

.success-text {
  color: var(--success);
  font-weight: 700;
}

.child-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 18px;
}

.switch {
  background: #eef3f1;
  border: 1px solid var(--border);
  color: var(--dark-blue);
  padding: 10px 14px;
  border-radius: 999px;
  cursor: pointer;
}

.switch.active {
  background: var(--olive);
  color: var(--white);
  border-color: var(--olive);
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

th,
td {
  text-align: right;
  padding: 12px 10px;
  border-bottom: 1px solid var(--border);
}

th {
  color: var(--dark-blue);
  font-size: 0.9rem;
}

.timeline,
.notification-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.timeline li,
.notice {
  background: #f6faf7;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 14px;
}

.timeline strong,
.notice {
  display: block;
}

.timeline span {
  display: block;
  margin: 4px 0;
  color: var(--muted);
}

.chat-box {
  background: #f7faf8;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 14px;
  min-height: 220px;
  display: grid;
  gap: 12px;
}

.bubble {
  max-width: 80%;
  padding: 12px 14px;
  border-radius: 16px 16px 16px 4px;
  background: var(--white);
  border: 1px solid var(--border);
}

.bubble.me {
  margin-right: auto;
  border-radius: 16px 16px 4px 16px;
  background: var(--olive-soft);
}

.bubble span {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
}

.bubble p {
  margin: 6px 0;
  line-height: 1.7;
}

.chat-form,
.stack-form {
  display: grid;
  gap: 12px;
  margin-top: 16px;
}

.chat-form {
  grid-template-columns: 1fr auto;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fff;
  color: var(--dark);
}

textarea {
  resize: vertical;
}

.driver-student-list,
.ticket-list {
  display: grid;
  gap: 14px;
}

.driver-student-item,
.ticket-card {
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: #fff;
}

.driver-student-item {
  display: grid;
  gap: 10px;
}

.driver-student-item strong,
.ticket-card strong {
  display: block;
  margin-bottom: 4px;
}

.driver-student-item span,
.ticket-card p {
  color: var(--muted);
}

.status-row {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  color: var(--muted);
}

.trip-status-box {
  background: var(--olive-soft);
  border-radius: 18px;
  padding: 22px;
  display: grid;
  gap: 8px;
}

.trip-status-box span {
  color: var(--olive);
  font-weight: 800;
  font-size: 1.2rem;
}

.trip-status-box strong,
.trip-status-box small {
  color: var(--dark-blue);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat-box {
  padding: 20px 18px;
  display: grid;
  gap: 8px;
}

.stat-box span {
  color: var(--muted);
}

.stat-box strong {
  font-size: 2rem;
  color: var(--dark-blue);
}

.status-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--olive-soft);
  color: var(--olive);
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 700;
}

.notice {
  display: flex;
  align-items: center;
  gap: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--green);
  display: inline-block;
}

.compact-page {
  max-width: 720px;
  margin: 0 auto;
}

.footer {
  padding: 20px 0 28px;
  color: var(--muted);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  border-top: 1px solid var(--border);
  padding-top: 16px;
}

@media (max-width: 900px) {
  .hero-grid,
  .feature-grid,
  .two-col,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .main-nav {
    justify-content: center;
  }

  .nav-wrap,
  .cta-box,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .nav-wrap {
    padding: 12px 0;
  }

  .chat-form {
    grid-template-columns: 1fr;
  }

  .mini-cards,
  .subscription-box {
    grid-template-columns: 1fr;
  }
}
