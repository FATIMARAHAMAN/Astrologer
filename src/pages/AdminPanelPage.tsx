import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetAstrologersQuery } from '../api/astrologersApi';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'gender', headerName: 'Gender', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'languages', headerName: 'Languages', width: 150 },
  { field: 'specialties', headerName: 'Specialties', width: 150 },
  { field: 'edit', headerName: 'Edit', width: 100, renderCell: () => <button>Edit</button> },
];

const AdminPanelPage: React.FC = () => {
  const { data: astrologers } = useGetAstrologersQuery();

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={astrologers || []} columns={columns} autoPageSize={true} autoHeight={true} />
    </div>
  );
};

export default AdminPanelPage;