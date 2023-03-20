Web Platform for Corajillo Inventory and Production Management
------------------------------------------------------------

This web platform is designed to help companies manage their inventory and production on a daily basis. The platform allows users to register orders and inventory, and calculates the amount of daily production based on the data entered. This process is automated during the first shift of the day, except for data entry. At the end of each shift, progress and production are recorded on the platform, and a new calculation is made to provide a clear work target for the next shift. All data is saved in an inventory and recorded in a production history.

Technology
----------

The platform utilizes the web technology Next.js to take advantage of server-side rendering, which allows for faster and more efficient page loading. This not only improves user experience but also ensures that the page is properly adapted to different devices.

In addition, the platform is designed to be very secure and reliable by using servers hosted on AWS. This ensures that data is protected and available for most of the time.

For data storage, relational databases are used which are an excellent choice as they offer a well-defined data structure, facilitating information management and analysis. Relational databases also offer the ability to ensure data integrity through the application of integrity constraints, meaning that stored data is accurate and reliable.

It is important to note that the relational databases are hosted on the AWS server, guaranteeing the availability and security of the stored data.

Installation
------------

To install and run the platform, follow these steps:

1. Clone the repository from Github.
2. Install the required dependencies using `npm install`.
3. Set up a PostgreSQL database instance and configure the database connection in the `.env` file.
4. Start the development server using `npm run dev`.


License
-------

This project is licensed under the MIT License - see the LICENSE file for details.
