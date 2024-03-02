
import { Table,  TableBody,  TableCell,  TableHead,  TableHeaderCell,  TableRow, Title, Text } from '@tremor/react';


  
  const data = [
    {
      workspace: 'sales_by_day_api',
      owner: 'John Doe',
      status: 'live',
      costs: '$3,509.00',
      region: 'US-West 1',
      capacity: '99%',
      lastEdited: '23/09/2023 13:00',
    },
    {
      workspace: 'marketing_campaign',
      owner: 'Jane Smith',
      status: 'live',
      costs: '$5,720.00',
      region: 'US-East 2',
      capacity: '80%',
      lastEdited: '22/09/2023 10:45',
    },
    {
      workspace: 'sales_campaign',
      owner: 'Jane Smith',
      status: 'live',
      costs: '$5,720.00',
      region: 'US-East 2',
      capacity: '80%',
      lastEdited: '22/09/2023 10:45',
    },
    {
      workspace: 'development_env',
      owner: 'Mike Johnson',
      status: 'live',
      costs: '$4,200.00',
      region: 'EU-West 1',
      capacity: '60%',
      lastEdited: '21/09/2023 14:30',
    },
    {
      workspace: 'new_workspace_1',
      owner: 'Alice Brown',
      status: 'live',
      costs: '$2,100.00',
      region: 'US-West 2',
      capacity: '75%',
      lastEdited: '24/09/2023 09:15',
    },
    {
      workspace: 'test_environment',
      owner: 'David Clark',
      status: 'inactive',
      costs: '$800.00',
      region: 'EU-Central 1',
      capacity: '40%',
      lastEdited: '25/09/2023 16:20',
    },
  ];

  
export default function Page(){
    return (<main className="p-4 md:p-10 mx-auto max-w-7xl">
    <Title>Plan</Title>
    <Text>Select plans</Text>
    {/* <Search /> */}
    <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Workspace
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Owner
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Status
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Region
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Capacity
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Costs
            </TableHeaderCell>
            <TableHeaderCell className="text-right text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Last edited
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.workspace}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.workspace}
              </TableCell>
              <TableCell>{item.owner}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.region}</TableCell>
              <TableCell>{item.capacity}</TableCell>
              <TableCell className="text-right">{item.costs}</TableCell>
              <TableCell className="text-right">{item.lastEdited}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </main>)
}