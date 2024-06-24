import { Navigate, RouteProps } from 'react-router-dom'
import { HomePage } from '@/pages'
import { getRouteHome, getRouteLoan, getRouteNotFound } from '@/shared/const/routes'

export enum AppRoutes {
  HOME = 'home',
  LOAN = 'loan',
  NOT_FOUND = 'not_found'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: getRouteHome(),
    element: <HomePage />
  },
  [AppRoutes.LOAN]: {
    path: getRouteLoan(),
    element: <Navigate to={getRouteHome()} />
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <Navigate to={getRouteHome()} />
  }
}
