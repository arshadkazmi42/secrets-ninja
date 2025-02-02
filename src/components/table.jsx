'use client';

import { Table } from 'flowbite-react';

function MainPageTable({ servicesConfig }) {
  // Helper function to capitalize first letter and replace underscores
  const formatEndpointName = (name) => {
    return name
      .split('_')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ');
  };

  // Function to transform service config into rows for rendering
  const renderServiceRows = () => {
    return Object.entries(servicesConfig).map(
      ([serviceName, serviceDetails]) => (
        <Table.Row
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
          key={serviceName}
        >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            <a href={serviceName} className="text-cyan-500 dark:text-cyan-500">
              {serviceName}
            </a>
          </Table.Cell>
          <Table.Cell>
            {Object.keys(serviceDetails.endpoints)
              .map((endpointName) => formatEndpointName(endpointName))
              .join(', ')}
          </Table.Cell>
          <Table.Cell>
            {serviceDetails.api_documentation_page ? (
              <a
                href={serviceDetails.api_documentation_page}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-500 hover:text-cyan-600"
              >
                Docs
              </a>
            ) : (
              'No Documentation'
            )}
          </Table.Cell>
        </Table.Row>
      )
    );
  };

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Service Name</Table.HeadCell>
          <Table.HeadCell>Endpoints</Table.HeadCell>
          <Table.HeadCell>Documentation</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">{renderServiceRows()}</Table.Body>
      </Table>
    </div>
  );
}

export default MainPageTable;
