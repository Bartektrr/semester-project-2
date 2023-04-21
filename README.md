This is the final exam project for the JavaScript course. Application works both locally (with the use of MySQL database) and is hosted on the Cyclic.sh platform (then we use DynamoDB to store data).
Before running the application, create the .env file with variables:

ADMIN_USERNAME = "YOUR ADMIN NAME"
ADMIN_PASSWORD = "YOUR ADMIN PASSWORD"
DATABASE_NAME = "SemesterProjectDatabase"
DIALECT = "mysql"
PORT = "3000"
ENV = "DEV" or "PROD"
SECRET='a long, randomly-generated string stored in env'
CLIENT_ID="FROM AUTH0 PLATFORM"
ISSUER_BASE_URL="FROM AUTH0 PLATFORM"
CYCLIC_DB="YOUR CYCLIC.SH DYNAMODB NAME"
CYCLIC_URL = "localhost" or your CYCLIC.SH URL
BASE_URL= same as CYCLIC_URL
