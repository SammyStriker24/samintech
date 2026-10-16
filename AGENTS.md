# Project conventions
- Keep portfolio content in focused section components composed by the home page, so sections remain independently maintainable.
- Use semantic global CSS tokens and the shared Button component for presentation and interactive controls, so the portfolio stays consistently themed.
- Save contact submissions through the validated, rate-limited submit-contact edge function before invoking the requested EmailJS browser delivery; submission data remains private to Cloud management.
- Import the downloadable CV through its asset pointer, so binary documents stay outside source control.