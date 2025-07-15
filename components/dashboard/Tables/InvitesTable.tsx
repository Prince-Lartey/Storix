"use client"

import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Mail, Calendar, Users } from 'lucide-react';
import React, { useState } from 'react'

export type InviteProps = {
    id: string;
    email: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date
}

export default function InvitesTable({ data }: { data: InviteProps[] }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [invites, setInvites] = useState<InviteProps[]>(data)

    const formatDate = (date: Date) => {
        return new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }).format(date)
    }

    const filteredInvites = invites.filter((invite) =>
        invite.email.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const acceptedCount = filteredInvites.filter(invite => invite.status).length;
    const pendingCount = filteredInvites.filter(invite => !invite.status).length;

    return (
        <div className='w-full min-h-screen '>
            <div className='w-full space-y-6'>
                {/* Header Section */}
                <div className='bg-white shadow-sm border border-gray-200 p-6'>
                    <div className='flex items-center justify-between mb-6'>
                        <div>
                            <h1 className='text-2xl font-bold text-gray-900 flex items-center gap-2'>
                                <Mail className='h-6 w-6 text-blue-600' />
                                Invitations
                            </h1>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-2 bg-green-50 px-3 py-2 '>
                                <div className='w-2 h-2 bg-green-500 '></div>
                                <span className='text-sm font-medium text-green-700'>{acceptedCount} Accepted</span>
                            </div>
                            <div className='flex items-center gap-2 bg-yellow-50 px-3 py-2 '>
                                <div className='w-2 h-2 bg-yellow-500 '></div>
                                <span className='text-sm font-medium text-yellow-700'>{pendingCount} Pending</span>
                            </div>
                        </div>
                    </div>

                    {/* Search Section */}
                    <div className='relative max-w-md'>
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                        <Input
                            type='search'
                            placeholder="Search by email address..."
                            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Table Section */}
                <div className='bg-white shadow-sm border border-gray-200 overflow-hidden'>
                    <div className='overflow-x-auto'>
                        <Table className='w-full'>
                            <TableHeader>
                                <TableRow className='bg-gray-50 border-b border-gray-200'>
                                    <TableHead className='font-semibold text-gray-700 py-4 px-6'>
                                        <div className='flex items-center gap-2'>
                                            <Mail className='h-4 w-4' />
                                            Email Address
                                        </div>
                                    </TableHead>
                                    <TableHead className='font-semibold text-gray-700 py-4 px-6'>
                                        <div className='flex items-center gap-2'>
                                            <Users className='h-4 w-4' />
                                            Status
                                        </div>
                                    </TableHead>
                                    <TableHead className='font-semibold text-gray-700 py-4 px-6'>
                                        <div className='flex items-center gap-2'>
                                            <Calendar className='h-4 w-4' />
                                            Date Sent
                                        </div>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {filteredInvites.length > 0 ? (
                                    filteredInvites.map((invite, index) => (
                                        <TableRow 
                                            key={invite.id} 
                                            className={`hover:bg-gray-50 transition-colors border-b border-gray-100 ${
                                                index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                                            }`}
                                        >
                                            <TableCell className='py-4 px-6'>
                                                <div className='flex items-center gap-3'>
                                                    <div className='w-8 h-8 bg-blue-100 flex items-center justify-center rounded-lg'>
                                                        <Mail className='h-4 w-4 text-blue-600' />
                                                    </div>
                                                    <span className='font-medium text-gray-900'>{invite.email}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell className='py-4 px-6'>
                                                {invite.status ? (
                                                    <Badge className='bg-green-100 text-green-800 border-green-200 hover:bg-green-100 font-medium px-3 py-1'>
                                                        ✓ Accepted
                                                    </Badge>
                                                ) : (
                                                    <Badge className='bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-100 font-medium px-3 py-1'>
                                                        ⏳ Pending
                                                    </Badge>
                                                )}
                                            </TableCell>
                                            <TableCell className='py-4 px-6'>
                                                <span className='text-gray-600 font-medium'>{formatDate(invite.createdAt)}</span>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={3} className='h-32 text-center py-8'>
                                            <div className='flex flex-col items-center gap-3'>
                                                <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center'>
                                                    <Mail className='h-6 w-6 text-gray-400' />
                                                </div>
                                                <div>
                                                    <p className='text-gray-500 font-medium'>No invitations sent</p>
                                                    <p className='text-gray-400 text-sm mt-1'>
                                                        {searchQuery ? 'Try adjusting your search terms' : 'Start by sending your first invitation'}
                                                    </p>
                                                </div>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </div>
                </div>

                {/* Footer Stats */}
                {filteredInvites.length > 0 && (
                    <div className='bg-white shadow-sm border border-gray-200 p-4'>
                        <div className='flex items-center justify-between text-sm text-gray-600'>
                            <span>Showing {filteredInvites.length} of {invites.length} invitations</span>
                            <span>
                                {Math.round((acceptedCount / filteredInvites.length) * 100)}% acceptance rate
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}