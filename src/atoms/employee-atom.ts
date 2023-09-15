import { atom } from 'jotai'

import { mockEmployees } from '@/data/mock-employees'

export const employeesAtom = atom<Employee[]>(mockEmployees)
