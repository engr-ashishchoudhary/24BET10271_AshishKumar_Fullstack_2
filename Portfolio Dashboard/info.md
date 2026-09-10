Personal Portfolio Dashboard – React Router
Problem Statement
You are developing a Personal Portfolio Dashboard using React. The application contains a public portfolio section and a private-style dashboard section.
The application must allow users to navigate between different pages without reloading the browser. The dashboard also contains multiple sections that should be displayed within a common dashboard layout.
The starter project already contains the required React components. However, the routing and navigation logic is incomplete.
Your task is to complete the application so that all pages can be accessed using the required URLs and the dashboard sections work as nested pages.
Application Structure
The application should support the following pages:
Public Pages
/ → Home page
/about → About page
/contact → Contact page
Dashboard Pages
/dashboard → Dashboard layout
/dashboard/profile → Profile page inside Dashboard
/dashboard/settings → Settings page inside Dashboard
Requirements
1. Application Navigation
The application contains a navigation bar visible across the application.
The navigation bar must provide links for:
Home
About
Contact
Dashboard
Selecting any of these options should navigate to the corresponding page without performing a full browser reload.

2. Contact Form
The Contact page contains a simple form with a Send Message button.
When the user submits the form:
The browser's default form submission must be prevented.
The application should redirect the user to the Home page.
The redirection must happen through React Router navigation rather than a normal HTML link.

3. Dashboard Layout
The Dashboard acts as a common layout for its child pages.
When the user visits:
/dashboard
the application should display the Dashboard heading and navigation options for:
Profile
Settings
No child page should be displayed when the user is directly on /dashboard.

4. Dashboard Profile
When the user visits:
/dashboard/profile
the application should display the Dashboard layout along with:
Profile Page
The Profile page must appear inside the Dashboard layout.

5. Dashboard Settings
When the user visits:
/dashboard/settings
the application should display the Dashboard layout along with:
Settings Page
The Settings page must also appear inside the Dashboard layout.
