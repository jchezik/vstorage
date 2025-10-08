# PRIVACY POLICY & TERMS OF SERVICE - PROMPT FOR CLAUDE CODE

Copy and paste this into Claude Code:

```
WRITE PROFESSIONAL PRIVACY POLICY AND TERMS OF SERVICE

Create two complete legal documents for VStorage - a Swiss lossless audio storage platform.

COMPANY CONTEXT:

Company Name: VStorage AG
Location: Zürich, Switzerland
Website: vstorage.ch
Service: Lossless audio storage for professional musicians, producers, and audio engineers

Key Technical Details:
• AES-256-GCM client-side encryption (zero-knowledge)
• Swiss data center (Zurich)
• No activity logging policy
• No third-party data sharing
• Swiss Federal Data Protection Act (FADP) principles guide our design
• GDPR compliant for EU customers
• Enterprise B2B model (no free tier)

What We Store:
• Encrypted audio files (WAV, FLAC, ALAC, AIFF)
• Account email (encrypted)
• Payment information (via payment processor, not on our servers)
• Account creation date
• Total storage used (number only, not file details)

What We DON'T Store:
• File names or content (zero-knowledge)
• IP addresses (beyond 24h for security)
• Listening/download activity
• User behavior analytics
• Any file metadata

---

DOCUMENT 1: PRIVACY POLICY
──────────────────────────

Create file: src/pages/privacy.astro

Use the Layout component with:
- Title: "Privacy Policy - VStorage"
- Description: "How VStorage protects your data and respects your privacy"

Write a comprehensive Privacy Policy covering:

1. INTRODUCTION
   • Effective date: January 15, 2025
   • VStorage AG commitment to privacy
   • Swiss company, Swiss law applies
   • Contact: privacy@vstorage.ch

2. INFORMATION WE COLLECT

   2.1 Account Information
   • Email address (encrypted at rest)
   • Account creation date
   • Subscription plan type
   • Payment information (processed by payment processor, not stored by us)

   2.2 File Storage
   • Encrypted audio files
   • We CANNOT access file content (zero-knowledge encryption)
   • We only see encrypted bytes
   • File metadata encrypted

   2.3 Usage Information (Minimal)
   • Total storage used (aggregate number only)
   • Account login timestamp (last login only)
   • API usage counts (rate limiting purposes)

   2.4 Technical Information (Temporary - 24h only)
   • IP address (security/fraud prevention, automatically deleted after 24h)
   • Failed login attempts (fraud prevention, 24h retention)
   • Device type (browser user agent, not stored, used for compatibility only)

   2.5 Information We DO NOT Collect
   • File names, content, or metadata
   • Listening or playback activity
   • Download patterns
   • Search queries
   • Location data
   • Analytics or tracking data
   • Device fingerprints

3. HOW WE USE YOUR INFORMATION

   3.1 Service Provision
   • Provide cloud storage service
   • Authenticate your account
   • Process payments
   • Provide customer support

   3.2 Security
   • Prevent fraud and abuse
   • Detect security threats
   • Maintain service integrity
   • All security logs deleted after 24h

   3.3 Communications
   • Service announcements (outages, maintenance)
   • Support responses
   • Billing notifications
   • No marketing emails (ever)

   3.4 Legal Compliance
   • Comply with Swiss law
   • Respond to valid legal requests (Swiss court orders only)
   • Note: Zero-knowledge architecture means we cannot provide file content

4. ZERO-KNOWLEDGE ARCHITECTURE

   4.1 What It Means
   • Files encrypted on your device BEFORE upload
   • Encryption keys never transmitted to our servers
   • We mathematically CANNOT access your files
   • Even under legal compulsion, we have no access

   4.2 Technical Implementation
   • AES-256-GCM encryption (client-side)
   • PBKDF2 key derivation (100,000 iterations)
   • Keys derived from your password on your device
   • Only encrypted data stored on our servers

   4.3 Implications
   • You are responsible for password security
   • Lost password = lost data (we cannot recover)
   • We cannot see your file names or content
   • Maximum privacy and security

5. DATA STORAGE AND SECURITY

   5.1 Data Location
   • Primary: Zurich, Switzerland
   • Backup: Geneva, Switzerland
   • Never stored outside Switzerland
   • Swiss Federal Data Protection Act principles guide our design

   5.2 Security Measures
   • AES-256-GCM encryption at rest
   • TLS 1.3 in transit
   • ISO 27001-aligned infrastructure
   • 24/7 security monitoring
   • Regular security audits
   • Physical security (biometric access, surveillance)

   5.3 Backups
   • Triple redundancy (3x copies)
   • Encrypted backups
   • Geographic separation (Zurich/Geneva)
   • 30-day retention for deleted files (recovery period)
   • Permanent deletion after 30 days

6. DATA SHARING AND DISCLOSURE

   6.1 No Third-Party Sharing
   • We do NOT share, sell, or rent your data
   • No advertising partners
   • No analytics providers
   • No data brokers

   6.2 Service Providers (Limited)
   • Payment processor (Stripe - for billing only)
   • Infrastructure provider (Swiss data center)
   • All providers under strict contracts (DPAs)

   6.3 Legal Requests
   • Only respond to valid Swiss court orders
   • Will fight overly broad requests
   • Will notify you if legally permitted
   • Zero-knowledge means we cannot provide file content

7. YOUR RIGHTS (GDPR & SWISS FADP)

   7.1 Access
   • Request copy of all your data
   • Export your files at any time

   7.2 Rectification
   • Correct inaccurate account information

   7.3 Erasure (Right to be Forgotten)
   • Delete your account and all data
   • Permanent deletion within 7 days
   • Purged from all backups within 30 days

   7.4 Data Portability
   • Download all your files
   • Standard formats (no proprietary lock-in)

   7.5 Restrict Processing
   • Pause your account (data not deleted)

   7.6 Object
   • Object to any data processing
   • We will comply or explain legal obligation

8. DATA RETENTION

   8.1 Active Account
   • Files: Until you delete them
   • Account info: Until account deletion
   • Logs: 24 hours only (automatically purged)

   8.2 Deleted Files
   • 30-day recovery period
   • Permanent deletion after 30 days
   • Purged from all backups

   8.3 Closed Account
   • All data deleted within 7 days
   • Permanent, irreversible deletion
   • No "shadow" copies retained

9. COOKIES AND TRACKING

   9.1 Cookies We Use
   • Session cookie (login only, deleted on logout)
   • No tracking cookies
   • No advertising cookies
   • No analytics cookies

   9.2 Do Not Track
   • We respect DNT signals
   • We don't track by default anyway

10. INTERNATIONAL TRANSFERS

    10.1 Data Location
    • All data stored in Switzerland only
    • Never transferred internationally
    • Swiss privacy laws apply exclusively

    10.2 EU Customers
    • Swiss adequacy decision (GDPR-compliant)
    • Higher privacy standard than EU minimum

11. CHILDREN'S PRIVACY

    • Service not intended for users under 18
    • If under 18, must have parental consent
    • We don't knowingly collect data from minors

12. CHANGES TO PRIVACY POLICY

    • We may update this policy
    • Material changes: 30 days notice via email
    • Continued use = acceptance
    • You can always close account

13. CONTACT US

    Privacy Questions: privacy@vstorage.ch
    Data Protection Officer: dpo@vstorage.ch
    PGP Key: [Fingerprint]

    Mail:
    VStorage AG
    Attn: Privacy Department
    Bahnhofstrasse XX
    8001 Zürich
    Switzerland

    Swiss Data Protection Authority:
    Federal Data Protection and Information Commissioner (FDPIC)
    www.edoeb.admin.ch

Last Updated: January 15, 2025

---

DOCUMENT 2: TERMS OF SERVICE
────────────────────────────

Create file: src/pages/terms.astro

Use the Layout component with:
- Title: "Terms of Service - VStorage"
- Description: "Terms and conditions for using VStorage"

Write comprehensive Terms of Service covering:

1. ACCEPTANCE OF TERMS

   1.1 Agreement
   • By using VStorage, you agree to these Terms
   • If you don't agree, don't use the service
   • Commercial use only (professional musicians, studios, etc.)

   1.2 Eligibility
   • Must be 18+ or have parental consent
   • Must have authority to enter contracts
   • Must comply with all applicable laws

   1.3 Account Registration
   • Accurate information required
   • One account per email
   • You're responsible for account security
   • Notify us immediately of unauthorized access

2. SERVICE DESCRIPTION

   2.1 The Service
   • Cloud storage for lossless audio files
   • Formats: WAV, FLAC, Apple Lossless (ALAC), AIFF
   • Zero-knowledge encrypted storage
   • Swiss data residency
   • Features as described on vstorage.ch

   2.2 Service Levels
   • 99.9% uptime SLA (service level agreement)
   • Excludes scheduled maintenance
   • Financial credits for extended downtime

   2.3 Modifications
   • We may modify features with notice
   • Material changes: 30 days notice
   • You may terminate if you disagree

3. ACCEPTABLE USE POLICY

   3.1 Permitted Use
   • Lawful storage of your audio files
   • Professional music production
   • Archival of recordings
   • Collaboration with authorized users

   3.2 Prohibited Use
   • Illegal content (pirated music, illegal recordings)
   • Copyrighted material without rights
   • Malware, viruses, harmful code
   • Content that violates others' rights
   • Spam or bulk unsolicited content
   • Automated abuse or excessive API use
   • Circumventing security measures

   3.3 Consequences
   • Warning for first violation
   • Suspension for repeated violations
   • Termination for serious violations
   • Legal action if warranted
   • No refunds for terminated accounts

4. YOUR CONTENT AND DATA

   4.1 Ownership
   • You own all files you upload
   • You retain all rights to your content
   • We claim no ownership of your music

   4.2 License to Us
   • You grant us license to store and transmit your files
   • Only to provide the service
   • We cannot access content (zero-knowledge)
   • License terminates when you delete files

   4.3 Responsibility
   • You're responsible for content legality
   • You have necessary rights to upload
   • You're responsible for backups
   • We provide redundancy but recommend local backups

   4.4 Copyright Infringement
   • We respect copyright (Swiss Copyright Act)
   • Report infringement: dmca@vstorage.ch
   • We will investigate valid claims
   • Repeat infringers will be terminated

5. PRIVACY AND SECURITY

   5.1 Privacy
   • See our Privacy Policy for details
   • Zero-knowledge architecture
   • No access to your files
   • Swiss privacy law applies

   5.2 Security
   • AES-256-GCM encryption
   • You're responsible for password security
   • Enable two-factor authentication (recommended)
   • Lost password = lost data (we cannot recover)

   5.3 Data Breach
   • We will notify you within 72 hours
   • Note: Zero-knowledge means encrypted data not useful to attackers

6. PAYMENTS AND BILLING

   6.1 Pricing
   • Custom enterprise pricing
   • Contact for quote
   • Prices in CHF (Swiss Francs) or USD

   6.2 Payment Terms
   • Monthly or annual billing
   • Payment due in advance
   • Credit card or bank transfer accepted
   • Automatic renewal unless canceled

   6.3 Refunds
   • 30-day money-back guarantee (new accounts)
   • Pro-rated refunds for annual plans (if terminated early)
   • No refunds for violations of Terms

   6.4 Late Payment
   • Account suspended after 7 days overdue
   • Account terminated after 30 days overdue
   • Data deleted 30 days after termination

   6.5 Price Changes
   • 60 days notice for price increases
   • Grandfathered pricing for annual plans
   • You may cancel before increase takes effect

7. ACCOUNT TERMINATION

   7.1 By You
   • Cancel anytime from account settings
   • Data deleted after 30-day recovery period
   • No refunds for mid-month cancellation

   7.2 By Us
   • For Terms violations
   • For non-payment
   • For illegal activity
   • 30 days notice (except for serious violations)

   7.3 Data Upon Termination
   • 30-day grace period to download files
   • Permanent deletion after 30 days
   • No recovery after deletion

8. SERVICE AVAILABILITY

   8.1 Uptime
   • 99.9% uptime SLA
   • Scheduled maintenance excluded
   • Advance notice for planned downtime

   8.2 Downtime Credits
   • 99.9% - 99.0%: 10% monthly credit
   • 99.0% - 95.0%: 25% monthly credit
   • Below 95%: 50% monthly credit
   • Must request credit within 30 days

   8.3 Force Majeure
   • Not liable for events beyond our control
   • Natural disasters, war, government action, etc.

9. LIMITATIONS OF LIABILITY

   9.1 Service "As Is"
   • Provided without warranties
   • No guarantee of fitness for purpose
   • No guarantee of error-free operation

   9.2 Limitation
   • Our liability limited to fees paid in past 12 months
   • No liability for indirect or consequential damages
   • No liability for lost profits or data loss

   9.3 Data Loss
   • We provide redundancy but you should maintain backups
   • Not liable for data loss (except gross negligence)
   • Zero-knowledge means we cannot recover lost passwords

   9.4 User Responsibility
   • You're responsible for your account security
   • You're responsible for content legality
   • You're responsible for maintaining backups

10. INDEMNIFICATION

    • You agree to indemnify VStorage
    • Against claims arising from your use
    • Against claims from your content
    • Against your violation of these Terms

11. INTELLECTUAL PROPERTY

    11.1 Our IP
    • VStorage name, logo, website are our property
    • Service design and features are our property
    • You may not copy or imitate

    11.2 Your IP
    • You retain all rights to your files
    • We claim no IP rights to your content

12. DISPUTE RESOLUTION

    12.1 Governing Law
    • Swiss law applies
    • Zürich, Switzerland jurisdiction
    • Swiss Federal Data Protection Act principles

    12.2 Arbitration
    • Disputes resolved by arbitration (optional)
    • Swiss Rules of International Arbitration
    • Venue: Zürich, Switzerland

    12.3 Class Action Waiver
    • No class actions (individual claims only)

13. GENERAL PROVISIONS

    13.1 Entire Agreement
    • These Terms + Privacy Policy = complete agreement
    • Supersedes all prior agreements

    13.2 Severability
    • If any provision invalid, others remain in effect

    13.3 No Waiver
    • Our failure to enforce doesn't waive our rights

    13.4 Assignment
    • You cannot assign your account
    • We may assign (e.g., corporate acquisition)

    13.5 Notices
    • Email: legal@vstorage.ch
    • We'll use your account email
    • Updates posted on website

14. CONTACT

    Questions about Terms: legal@vstorage.ch
    
    VStorage AG
    Bahnhofstrasse XX
    8001 Zürich
    Switzerland

Last Updated: January 15, 2025

---

IMPLEMENTATION INSTRUCTIONS:

1. Create two new pages:
   - src/pages/privacy.astro
   - src/pages/terms.astro

2. Use Layout component for both

3. Format Requirements:
   • Clear section headings (H2)
   • Subsections (H3)
   • Numbered sections (1, 1.1, 1.2, etc.)
   • Easy to read (not wall of text)
   • Professional typography
   • Proper spacing
   • Table of contents at top (optional but nice)

4. Styling:
   • Max width: 800px (readable line length)
   • Padding: comfortable spacing
   • Font size: 16px minimum (legal docs should be readable)
   • Line height: 1.6 (readability)
   • Professional, not flashy

5. Navigation:
   • Add links in Footer: Privacy Policy, Terms of Service
   • Open in same window (not new tab)

6. Legal Disclaimer:
   At top of each document, add:
   "This document is provided for informational purposes. While we strive for 
   accuracy, this does not constitute legal advice. For legal questions, 
   consult a qualified attorney."

7. Last Updated:
   Show "Last Updated: January 15, 2025" at top and bottom

8. Professional Appearance:
   • These should look like REAL legal documents
   • Professional but readable
   • Not intimidating walls of text
   • Clear, organized structure

CREATE BOTH DOCUMENTS NOW.

Make them comprehensive, professional, and legally appropriate for a 
Swiss cloud storage company with zero-knowledge encryption.
```

---

## What This Creates:

**Privacy Policy:**
- ✅ Explains zero-knowledge architecture
- ✅ Lists what data is/isn't collected
- ✅ Covers Swiss law and GDPR
- ✅ Explains data retention
- ✅ Details security measures
- ✅ User rights (access, deletion, etc.)
- ✅ Professional and comprehensive

**Terms of Service:**
- ✅ Account terms
- ✅ Acceptable use policy
- ✅ Payment terms
- ✅ Termination conditions
- ✅ Liability limitations
- ✅ Swiss law jurisdiction
- ✅ Professional and protective

Both documents will be:
- Professional and legally appropriate
- Specific to VStorage's actual practices
- Comprehensive but readable
- Properly formatted and organized

Claude Code will create real, production-ready legal documents! 📄⚖️
