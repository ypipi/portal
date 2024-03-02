
import { Card, Title, Text } from '@tremor/react';
export default function Page(){
    return (<main className="p-4 md:p-10 mx-auto max-w-7xl">
    <Title>System Settings</Title>
    <Text>Select plans</Text>
    {/* <Search /> */}
    <Card className="mt-6">
    <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content"> 
           Sales      </h4>  
               <p className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">  
                     $7 1,465     </p>  
                         <p className="mt-4 flex items-center justify-between text-tremor-default text-tremor-content dark:text-dark-tremor-content">        <span>32% of annual target</span>        <span>$225,000</span>      </p>     
      {/* <UsersTable users={users} /> */}
    </Card>
  </main>)
}