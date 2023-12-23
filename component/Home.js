import React from 'react'
// import 
// { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
//  from 'react-icons/bs'
 import 
 { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Everett',
          uv: 4000,
        
        },
        {
          name: 'Seattle',
          uv: 3000,
          
          
        },
        {
          name: 'Lynnwood',
          uv: 2000,
          
          
        },
        {
          name: 'Bothell',
          uv: 2780,
          
          
        },
        {
          name: 'Mukilteo',
          uv: 1890,
        
          
        },
        {
          name: 'Edmonds',
          uv: 2390,
      
          
        },
        
      ];

      const data1 = [
        {
          name: 'Service Plumbing',
          uv: 4000,
        //   pv: 2400,
          //amt: 2400,
        },
        {
          name: 'BidWork HVAC',
          uv: 3000,
          
          //amt: 2210,
        },
        {
          name: 'Service HVAC',
          uv: 2000,
          
          //amt: 2290,
        },
        {
          name: 'BidWOrkPlumbing',
          uv: 2780,
          
          //amt: 2000,
        },
        {
          name: 'HWT Replacement',
          uv: 1890,
        
          //amt: 2181,
        },
        {
          name: 'Maintenance',
          uv: 2390,
      
          //amt: 2500,
        },
        {
          name: 'Material Sale',
          uv: 2390,
      
          //amt: 2500,
        },
        
        
      ];
     

  return (
    <main className='main-container'>
    <h4>Company Metrics</h4>
        <div className='main-cards'>
        
            <div className='card'>
                <div className='card-inner'>
                    <h3>$406,411.29</h3>
                    
                </div>
                <h1>Total Revenue</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>$620</h3>
                    
                </div>
                <h1>Total Jobs Avg</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>655</h3>
                    
                </div>
                <h1>Tickets Created </h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>735</h3>
                    
                </div>
                <h1>Tickets Scheduled</h1>
            </div>
        </div>




        

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>$110,448.8</h3>
                    
                </div>
                <h1>Outstanding Amount</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>105</h3>
                    
                </div>
                <h1>Membership Sold</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>436</h3>
                    
                </div>
                <h1>Jobs Completed</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>65</h3>
                    
                </div>
                <h1>Total Canceled</h1>
            </div>
            </div>

        <div className='charts'>
        <ResponsiveContainer width="100%" height={300}>
        <h4>Revenue By Job Type</h4>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" label={{ value: 'Revenue for November 2019', position: 'insideBottom', offset: -15 }} />
        <YAxis dataKey="name" type="category" label={{  angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>


     

    <ResponsiveContainer width="100%" height={300}>
    <h4>Revenue By Job Type</h4>
      <BarChart
        layout="vertical"
        data={data1}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        barSize={20}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" label={{ value: 'Revenue for November 2019', position: 'insideBottom', offset: -15 }} />
        <YAxis dataKey="name" type="category" label={{ angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home