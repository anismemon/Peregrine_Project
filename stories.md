# Epics
-Form interface
-Admin interface
-Data storage
-Data reporting

# Technical architecture:
MERN stack 
Use Mongoose for a schema
Hosting? 
Firebase for Authentication 
Connection with the Audubon / FWS tech? 

---

## Observation Search
As an Admin
I want to be able to sort through entries by site, monitor, or date
So that I can easily review and comment on individual entries.

## Data Schema
As an admin
I want to have the database schema match the form fields, with additional fields for admin comments,
So that I am sure the info in the database matches what’s on the form.

## Data Storage
As an admin
I want to have the data stored in a database
So I can store data and access it later.

## Data export
As an admin
I want to be able to export the data to a CSV file
So that I can use the data for my reporting. 

## Entry editing: 
As an Admin
I want to: Edit entries and add my comments
So that: I can have my entries and comments. 

## Entry Delete:
As an Admin,
I want to be able to delete an entry
So that I can remove unnecessary entries.

## Entry qualification
As an admin  
I want the entries about nesting behavior to be able to be qualified with "confirmed" or "suspected"  
So I can judge the likelihood of the observation.  

## Eagle Fields  
As an admin
I want fields for monitors to record observations on approximate age and band or no-band  
So I can track these points independently.  

## Weather Notes
As an admin  
I want the weather fields consolidated into a "weather notes" field  
So I can judge whether and how the weather impacted the observation.  

## Site addition
As an developer
I want to have a separate schema for observation sites, eagle/falcon,  
So that I can easily add new sites to the schema. 

## Site Addition, Admin
As an admin  
I want to be easily able to add new nesting locations to the form and reports,  
So that I can accommodate changes to the habits and territory of the birds. 

---

## Entry History
As a monitor
I want to be able to look at my past entries
So I can see what I’ve entered previously. 

## Entry Review 
As a monitor
I want to be able to review my submission before final submit,
So that I can be sure it’s accurate.

## Photo 
As a monitor
I want to be able to add a photo to my report
So I can show the nesting site(s)


## /*********** Entry editing
As a monitor
I want to be able to edit my data,
So that I can review it and correct later.

## /********User Authentication
As a monitor
I want to be able to log into the form using a login and password,
So that the form is protected and my observations are assigned to me.

## /**********Authentication part 2
As a developer
I want the authentication variables (API key, password etc.) to be hidden using a .env file,
So that these elements are protected.

## User correction
As a monitor
I want to know how to correct an error in my form submission,
So that I can be sure Margaret has the correct information.

## Form Entry
As a monitor
I want to easily be able to record my observations 
So that my observations are recorded to the database

## Site Selection
As a monitor 
I want to be able to select my site from a dropdown menu
So that my observations are recorded at the correct site

## Observation Time
As a monitor
When I enter my start time and end time, I want it to calculate the total observation time,
So that I save time and effort on the form. 

## Logged In
As a monitor
When I'm logged in, I want to not have to enter my name/email
So that I can remove an unneccessary step from the submit process.

# Wish List:
-Backlog data entry to eBird
-Backlog data entry into tracking system
-Authentication
