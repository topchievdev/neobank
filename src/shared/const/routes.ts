export const getRouteHome = () => '/'
export const getRouteLoan = () => '/loan'
export const getRouteNotFound = () => '*'

export const getRouteScoring = () => '/loan/:applicationId'
export const getRouteDocument = () => '/loan/:applicationId/document'
export const getRouteSign = () => 'loan/:applicationId/document/sign'
export const getRouteCode = () => '/loan/:applicationId/code'

export const getRouteProduct = () => '/product'
export const getRouteAccount = () => '/account'
export const getRouteResources = () => '/resources'
export const getRouteOnlineBank = () => '/online-bank'

export const getRouteCareer = () => '/career'
export const getRouteSupport = () => '/support'
export const getRouteInvestors = () => '/investors'
export const getRouteAnalytics = () => '/analytics'
export const getRouteRequisites = () => '/requisites'
export const getRoutePressCenter = () => '/press-center'
export const getRouteAskAndQuestion = () => '/help/ask-and-question'
export const getRouteAbout = () => '/about'
export const getRouteQualityOfService = () => '/about/quality-of-service'
export const getRouteBusinessAndProcesses = () => '/about/business-and-processes'
export const getRouteCopmlianceAndBusinessEthics = () =>
  '/about/compliance-and-business-ethics'

export const getAppRouteScoring = (id: number | string) => `/loan/${id}`
export const getAppRouteDocument = (id: number | string) => `/loan/${id}/document`
export const getAppRouteSign = (id: number | string) => `/loan/${id}/document/sign`
export const getAppRouteCode = (id: number | string) => `/loan/${id}/code`
