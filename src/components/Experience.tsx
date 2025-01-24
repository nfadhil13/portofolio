import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Mobile Engineer",
    company: "PT. Neural Technologies Indonesia (NTI)",
    period: "Aug 2021 - Current",
    highlights: [
      "Created a simple, reusable Flutter dashboard library to implement graphics, simplifying the porting of the Odoo Dashboard Library to Flutter with the use of fl_chart connected via REST API. This library boosted productivity by enabling other developers in the company to easily create dashboards.",
      "Led a discussion with four other Flutter developers to create a code convention, layering, and architecture standard for Flutter apps used by the company. As the senior developer, I guided the discussion, resulting in a standard that separated concerns between modules, made bug fixing easier, and Accelerated developers to focus on tasks without worrying about code conflicts.",
      "Inovated a modular approach for building multilingual applications by separating translations into individual code for each module, simplifying the coding process.",
      "Architected a comprehensive UI toolkit that accelerated project onboarding time by reducing setup complexity across five distinct applications; facilitated focus on business logic instead of repetitive design tasks.",
      "Led the mobile team for the Rukun App, a feature-rich application with a large codebase. Conducted code reviews to ensure code quality met the established code conventions and architecture standards agreed upon by the team.",
      "Integrated the Rukun app with the Midtrans payment gateway and combined it with WebSocket for real-time transaction updates, enhancing user experience with instant payment status notifications.",
      "Developed a feature-rich chat application that supports sending text, images, videos, links, and in-app content. The chat app also includes the ability to reply to messages and scroll to specific chats, improving user interaction and communication.",
      "Implemented deep linking, including setting up the web configuration. This feature enables users to access the app and share content through other platforms, boosting engagement and making it easier for users to interact with the app's content.",
      "Implemented Multi Flavor for the app, separating the Local, Dev, and Prod environments. This approach made testing easier and allowed for environment-specific configurations, such as Firebase, prevent unintended pushed into the production environment.",
      "Connected the application to Firebase and designed the Firebase push notification payload to allow users to click notifications and be redirected to specific pages. This implementation improved user experience by providing more intuitive and actionable notifications.",
      "Orchestrated the deployment of five applications, including Rukun App and Connect IA, to both Play Store and App Store"
    ]
  },
  {
    title: "Flutter Engineer",
    company: "PT. Ultimo Solution",
    period: "Dec 2022 - Aug 2024",
    highlights: [
      "Created a reusable and easy-to-use FormBuilder to streamline form development, increasing productivity for the mobile team.",
      "Developed an offline support fielding application using Flutter Hive for local data storage and ArcGIS Map SDK for offline map loading, allowing users to access data and maps without internet connectivity.",
      "Integrated the Android Service API to download large map files in the background, ensuring the app continues downloading even when minimized.",
      "Revived and fixed an abandoned, outdated, unofficial ArcGIS SDK package by correcting its native code implementation, resolving errors, and making it compatible with Flutter.",
      "Refactored poorly written Dart code and raised awareness within the team about best practices, such as avoiding the dynamic data type, organizing code into separate files, and modularizing widgets, resulting in more maintainable code."
    ]
  },
  {
    title: "Android Engineer Freelancer",
    company: "PT. Solusi Digital Industri",
    period: "Mar 2021 - Sep 2021",
    highlights: [
      "Implemented a stream-based location update system for a food delivery app, allowing real-time courier tracking via Firebase.",
      "Built a location-based attendance system for an HR management app, preventing attendance outside allowed areas and detecting mock locations.",
      "Developed an offline-ready POS app (Kawan Mart) using SQLite, enabling seamless customer transactions without internet connectivity.",
      "Conceptualized and implemented a synchronization process for Offline-ready POS app to minimize data updates, reducing response times and improving the user experience.",
      "Integrated the POS app with a thermal printer, allowing sellers to print receipts for customers."
    ]
  },
  {
    title: "Android Engineer Intern",
    company: "PT. One Click Democracy",
    period: "Feb 2021 - April 2021",
    highlights: [
      "Co-Ordinated senior developers by coding assigned tasks.",
      "Implemented pagination on 'post list' to enhance scrolling experience.",
      "Gained foundational experience in Android development workflows and team collaboration"
    ]
  }
];

export const Experience = () => {
  return (
    <section className="py-16 px-6 bg-white" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8">Professional Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle className="text-xl font-bold">{exp.title}</CardTitle>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <Badge variant="secondary">{exp.period}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm leading-relaxed">{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};