## MySQL Database Design

### Table: Patients

id: INT, Primary key, AUTO_INCREMENT
name: VARCHAR, Not Null
email: VARCHAR, Not Null
password: VARCHAR, Not Null
gender: VARCHAR
age: INT, Not Null
birthdate: DATETIME, Not Null
phone_number: VARCHAR
last_appointment: DATETIME, Not Null
allergies: VARCHAR
blood_type: VARCHAR

### Table: Doctor

id: INT, Primary key, AUTO_INCREMENT
name: VARCHAR, Not Null
email: VARCHAR, Not Null
password: VARCHAR, Not Null
phone_number: VARCHAR
##For determine the type of appointments they can offer
seniority: (0 = internship, 1 = junior, 2 = senior)
availability: (0 = unavailible, 1 = availible)
next_appointment: DATETIME, Not Null
last_appointment: DATETIME, Not Null

### Table: appointments

- id: INT, Primary Key, Auto Increment
- doctor_id: INT, Foreign Key → doctors(id)
- patient_id: INT, Foreign Key → patients(id)
- appointment_date: DATETIME, Not Null
- start_time: TIME, not Null
- length: VARCHAR, Not Null
- status: INT (0 = Scheduled, 1 = Completed, 2 = Cancelled)
- location: VARCHAR, Not Null
- cost: varchar
- pending_payment: INT (0 = false, 1 true), not null

## Table: admins

id: INT, Primary key, AUTO_INCREMENT
name: VARCHAR, Not Null
email: VARCHAR, Not Null
password: VARCHAR, Not Null

## MongoDB Collection Design

### Collection: feedback

```json
{
  "_id": "ObjectId('64hqp032k32654')",
  "doctor_name": "John Smith",
  "patient_name": "Danny bloomer",
  "patient_age": "20",
  "doctor_id": "53",
  "patient_id": "3",
  "appointment_date": "10/6/2023",
  "location": "Rustfield hospital",
  "appointment_reason": "Smoking rehabilitation",
  "Feedback": "The appointment was great. The doctor was very professional and polite.",
  "Rating": "9/10"
}
```
