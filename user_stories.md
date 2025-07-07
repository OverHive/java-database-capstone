## Admin User Stories

**Title:**
_As a admin, I want be able to log in with my user name and password, so that I can manage the platform securely._
**Acceptance Criteria:**

1. When admin enter their username and password in the sign page they are
   redirected to admin page
2. The admin can management the plaform from the admin page
3. The admin page is only availible to admins
   **Priority:** High
   **Story Points:** 5

**Title:**
_As a admin, I want be able to log out of admin page to protect system access._
**Acceptance Criteria:**

1. When the admin signs out they lose their administrative privileges.
2. The admin page is only availible to signed in admins
3. A signed out admin regains their administrative privileges when they sign back into there account.
   **Priority:** High
   **Story Points:** 2

**Title:**
_As a admin, I want be able to add doctors to the portal so that patients can book appointments._
**Acceptance Criteria:**

1. The admin can view a list of all the availble doctors.
2. Signed in admins can add doctors to portal.
3. Added doctors appear in the portal.
   **Priority:** High
   **Story Points:** 5
   **Notes:**
   Requires the ability for doctors to sign up

**Title:**
_As a admin, I want be able to delete doctor's profile from the portal so that patients cannot book appointments with unavailable doctors._
**Acceptance Criteria:**

1. The admin can view a list of all the availble doctors.
2. Signed in admins can remove doctors from portal.
3. Removed doctors vanish from the port in the portal.
   **Priority:** High
   **Story Points:** 5
   **Notes:**

- Requires doctor accounts creation

**Title:**
_As a admin, I want be able to run a stored procedure in MySQL CLI to get the number of appointments per month and track usage statistics._
**Acceptance Criteria:**

1. Admin users can access the applications MySQL databases
2. Admin users can query the MySQL databases from the CLI with stored procedures
3. The stored procedure query returns the number of appointments per month and the applications usage statistics
   **Priority:** Medium
   **Story Points:** 3
   **Notes:**

- Requires doctor accounts creation

## Patient User Stories

**Title:**
_As a patient, I want be able to view a list of doctors without logging in to explore options before registering._
**Acceptance Criteria:**

1. The patient can view a list of doctors
2. The doctor list does not require the patient sign to to view the list
   **Priority:** Low
   **Story Points:** 2
   **Notes:**

- Requires doctor accounts creation

**Title:**
_As a patient, I want be able to sign up using my email and password to book appointments._
**Acceptance Criteria:**

1. There is a page for creating an patient account.
2. The patient can create an account using their email and password
3. The patient can book appointments from their account
   **Priority:** High
   **Story Points:** 3
   **Notes:**

- Requires doctor accounts creation

**Title:**
_As a patient, I want be able to log into the portal to manage my bookings._
**Acceptance Criteria:**

1. The portal has a sign in page
2. The patient can sign to their account using their password and email
3. The patient can manage appointments from their account
   **Priority:** High
   **Story Points:** 3
   **Notes:**

- Requires doctor accounts creation

**Title:**
_As a patient, I want be able to log out of the portal to secure my account._
**Acceptance Criteria:**

1. The patients loses access to their account when they sign out.
2. The patient's detail is only viewable when signed into their account.
3. The patient can re-enter their password and email on the sign in page to regain access.
   **Priority:** High
   **Story Points:** 2

**Title:**
_As a patient, I want be able to view my upcoming appointments so that I can prepare accordingly._
**Acceptance Criteria:**

1. The patient can book appointments from their account.
2. The patient can view upcoming appointments information when signed in

   **Priority:** Medium
   **Story Points:** 2
   **Notes:**

- Requires doctor accounts creation and patient creation

## Doctor User Stories

**Title: Doctor sign in**
_As a Doctor, I want be able to log into the portal to manage my appointments._
**Acceptance Criteria:**

1. The portal has a sign in page
2. The doctor can sign to their account using their password and email
3. The doctor can manage appointments from their account
   **Priority:** High
   **Story Points:** 3

**Title:**
_As a doctor, I want be able to lLog out of the portal to protect my data._
**Acceptance Criteria:**

1. The docter loses access to their account when they sign out.
2. The data related to the doctor is only viewable when signed into their account.
3. The docter can re-enter their password and email on the sign in page to regain access to the account.
   **Priority:** High
   **Story Points:** 2

**Title:**
_As a docter, I want be able to view my appointment calendar to stay organized._
**Acceptance Criteria:**

1. The doctor can book appointments from their account.
2. The docter can view upcoming appointments information when signed in

   **Priority:** Medium
   **Story Points:** 2
   **Notes:**

- Requires patient account creation

**Title:**
_As a docter, I want be able to mark my unavailability to inform patients about only the available slots._
**Acceptance Criteria:**

1. The doctor can book appointments from their account.
2. The docter can view upcoming appointments information when signed in

   **Priority:** Medium
   **Story Points:** 2
   **Notes:**

- Requires patient account creation

**Title:**
_As a docter, I want be able to update your profile with specialization and contact information so that patients have up-to-date information._
**Acceptance Criteria:**

1. The doctor can book appointments from their account.
2. The docter can view upcoming appointments information when signed in

   **Priority:** Medium
   **Story Points:** 2
   **Notes:**

- Requires patient account creation
