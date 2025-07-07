This Spring Boot application uses both MVC and REST controllers. Thymeleaf templates are used for the Admin and Doctor dashboards, while REST APIs serve all other modules. The application interacts with two databases—MySQL (for patient, doctor, appointment, and admin data) and MongoDB (for prescriptions). All controllers route requests through a common service layer, which in turn delegates to the appropriate repositories. MySQL uses JPA entities while MongoDB uses document models.

This a Spring Boot application for a Smart Clinic Management system. It is built based on the MVC and the REST conntrollers. It will use Thymeleaf tempates for the dashboards and REST api for communication between other models. The application uses JPA entities with MySQL databases for patient, doctor, appointment and admin data and document models with MongoDB databases for prescription data. Request are routed with a service layer for forwarding to the appropriate repositories.

1. User interface layer: User access the application through the AdminDashboard or Appointment page.
2. Controller layer: The request is routed to the appropriate Thymeleaf or REST controller.
3. Service layer: The service layer forwards the user request from the controller to the repository layer
4. Repository layer: The repository layer accesses data from the databases.
5. Database access: Data is retriveved from the MySQL or Mongo databases/
6. Model binding: The retrieved database data is then modeled as as JPA entities or document models, depending on the selected database
7. Application models :The model data is used to update pages the user sees.
