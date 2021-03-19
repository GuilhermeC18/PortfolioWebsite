import React from 'react';
import { AdminProjects } from '../../components/admin_components/projects';
import { AdminTech } from '../../components/admin_components/technologies';


export default function AdminDashboard() {
 
    return (
        <>  
            <h1>Admin Dashboard</h1>
            <AdminProjects />
            <AdminTech />
        </>
    )
}