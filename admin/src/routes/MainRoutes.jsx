import { lazy } from 'react';

// project-imports
import ErrorBoundary from './ErrorBoundary';
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
import PagesLayout from 'layout/Pages';
import SimpleLayout from 'layout/Simple';

import { SimpleLayoutType } from 'config';
import { loader as productsLoader, productLoader } from 'api/products';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
const DashboardAnalytics = Loadable(lazy(() => import('pages/dashboard/analytics')));

// render - widget
const WidgetStatistics = Loadable(lazy(() => import('pages/widget/statistics')));
const WidgetData = Loadable(lazy(() => import('pages/widget/data')));
const WidgetChart = Loadable(lazy(() => import('pages/widget/chart')));

// render - applications
const AppChat = Loadable(lazy(() => import('pages/apps/chat')));
const AppCalendar = Loadable(lazy(() => import('pages/apps/calendar')));

const AppKanban = Loadable(lazy(() => import('pages/apps/kanban')));
const AppKanbanBacklogs = Loadable(lazy(() => import('sections/apps/kanban/Backlogs')));
const AppKanbanBoard = Loadable(lazy(() => import('sections/apps/kanban/Board')));

const AppCustomerList = Loadable(lazy(() => import('pages/apps/customer/list')));
const AppCustomerCard = Loadable(lazy(() => import('pages/apps/customer/card')));

const AppInvoiceCreate = Loadable(lazy(() => import('pages/apps/invoice/create')));
const AppInvoiceDashboard = Loadable(lazy(() => import('pages/apps/invoice/dashboard')));
const AppInvoiceList = Loadable(lazy(() => import('pages/apps/invoice/list')));
const AppInvoiceDetails = Loadable(lazy(() => import('pages/apps/invoice/details')));
const AppInvoiceEdit = Loadable(lazy(() => import('pages/apps/invoice/edit')));

const UserProfile = Loadable(lazy(() => import('pages/apps/profiles/user')));
const UserTabPersonal = Loadable(lazy(() => import('sections/apps/profiles/user/TabPersonal')));
const UserTabPayment = Loadable(lazy(() => import('sections/apps/profiles/user/TabPayment')));
const UserTabPassword = Loadable(lazy(() => import('sections/apps/profiles/user/TabPassword')));
const UserTabSettings = Loadable(lazy(() => import('sections/apps/profiles/user/TabSettings')));

const AccountProfile = Loadable(lazy(() => import('pages/apps/profiles/account')));
const AccountTabProfile = Loadable(lazy(() => import('sections/apps/profiles/account/TabProfile')));
const AccountTabPersonal = Loadable(lazy(() => import('sections/apps/profiles/account/TabPersonal')));
const AccountTabAccount = Loadable(lazy(() => import('sections/apps/profiles/account/TabAccount')));
const AccountTabPassword = Loadable(lazy(() => import('sections/apps/profiles/account/TabPassword')));
const AccountTabRole = Loadable(lazy(() => import('sections/apps/profiles/account/TabRole')));
const AccountTabSettings = Loadable(lazy(() => import('sections/apps/profiles/account/TabSettings')));

const AppECommProducts = Loadable(lazy(() => import('pages/apps/e-commerce/product')));
const AppECommProductDetails = Loadable(lazy(() => import('pages/apps/e-commerce/product-details')));
const AppECommProductList = Loadable(lazy(() => import('pages/apps/e-commerce/products-list')));
const AppECommCheckout = Loadable(lazy(() => import('pages/apps/e-commerce/checkout')));
const AppECommAddProduct = Loadable(lazy(() => import('pages/apps/e-commerce/add-product')));

// render - forms & tables
const FormsValidation = Loadable(lazy(() => import('pages/forms/validation')));
const FormsWizard = Loadable(lazy(() => import('pages/forms/wizard')));

const FormsLayoutBasic = Loadable(lazy(() => import('pages/forms/layouts/basic')));
const FormsLayoutMultiColumn = Loadable(lazy(() => import('pages/forms/layouts/multi-column')));
const FormsLayoutActionBar = Loadable(lazy(() => import('pages/forms/layouts/action-bar')));
const FormsLayoutStickyBar = Loadable(lazy(() => import('pages/forms/layouts/sticky-bar')));

const FormsPluginsMask = Loadable(lazy(() => import('pages/forms/plugins/mask')));
const FormsPluginsClipboard = Loadable(lazy(() => import('pages/forms/plugins/clipboard')));
const FormsPluginsRecaptcha = Loadable(lazy(() => import('pages/forms/plugins/re-captcha')));
const FormsPluginsEditor = Loadable(lazy(() => import('pages/forms/plugins/editor')));
const FormsPluginsDropzone = Loadable(lazy(() => import('pages/forms/plugins/dropzone')));

const ReactTableBasic = Loadable(lazy(() => import('pages/tables/react-table/basic')));
const ReactDenseTable = Loadable(lazy(() => import('pages/tables/react-table/dense')));
const ReactTableSorting = Loadable(lazy(() => import('pages/tables/react-table/sorting')));
const ReactTableFiltering = Loadable(lazy(() => import('pages/tables/react-table/filtering')));
const ReactTableGrouping = Loadable(lazy(() => import('pages/tables/react-table/grouping')));
const ReactTablePagination = Loadable(lazy(() => import('pages/tables/react-table/pagination')));
const ReactTableRowSelection = Loadable(lazy(() => import('pages/tables/react-table/row-selection')));
const ReactTableExpanding = Loadable(lazy(() => import('pages/tables/react-table/expanding')));
const ReactTableEditable = Loadable(lazy(() => import('pages/tables/react-table/editable')));
const ReactTableDragDrop = Loadable(lazy(() => import('pages/tables/react-table/drag-drop')));
const ReactTableColumnVisibility = Loadable(lazy(() => import('pages/tables/react-table/column-visibility')));
const ReactTableColumnResizing = Loadable(lazy(() => import('pages/tables/react-table/column-resizing')));
const ReactTableStickyTable = Loadable(lazy(() => import('pages/tables/react-table/sticky')));
const ReactTableUmbrella = Loadable(lazy(() => import('pages/tables/react-table/umbrella')));
const ReactTableEmpty = Loadable(lazy(() => import('pages/tables/react-table/empty')));
const ReactTableVirtualized = Loadable(lazy(() => import('pages/tables/react-table/virtualized')));

// render - charts & map
const ChartApexchart = Loadable(lazy(() => import('pages/charts/apexchart')));
const ChartOrganization = Loadable(lazy(() => import('pages/charts/org-chart')));
const Map = Loadable(lazy(() => import('pages/map')));

// table routing
const MuiTableBasic = Loadable(lazy(() => import('pages/tables/mui-table/basic')));
const MuiTableDense = Loadable(lazy(() => import('pages/tables/mui-table/dense')));
const MuiTableEnhanced = Loadable(lazy(() => import('pages/tables/mui-table/enhanced')));
const MuiTableDatatable = Loadable(lazy(() => import('pages/tables/mui-table/datatable')));
const MuiTableCustom = Loadable(lazy(() => import('pages/tables/mui-table/custom')));
const MuiTableFixedHeader = Loadable(lazy(() => import('pages/tables/mui-table/fixed-header')));
const MuiTableCollapse = Loadable(lazy(() => import('pages/tables/mui-table/collapse')));

// pages routing
const AuthLogin = Loadable(lazy(() => import('pages/auth/auth1/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/auth1/register')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/auth1/forgot-password')));
const AuthResetPassword = Loadable(lazy(() => import('pages/auth/auth1/reset-password')));
const AuthCheckMail = Loadable(lazy(() => import('pages/auth/auth1/check-mail')));
const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/auth1/code-verification')));

const AuthLogin2 = Loadable(lazy(() => import('pages/auth/auth2/login2')));
const AuthRegister2 = Loadable(lazy(() => import('pages/auth/auth2/register2')));
const AuthForgotPassword2 = Loadable(lazy(() => import('pages/auth/auth2/forgot-password2')));
const AuthResetPassword2 = Loadable(lazy(() => import('pages/auth/auth2/reset-password2')));
const AuthCheckMail2 = Loadable(lazy(() => import('pages/auth/auth2/check-mail2')));
const AuthCodeVerification2 = Loadable(lazy(() => import('pages/auth/auth2/code-verification2')));

const AuthLogin3 = Loadable(lazy(() => import('pages/auth/auth3/login3')));

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/error/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/error/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction')));
const MaintenanceUnderConstruction2 = Loadable(lazy(() => import('pages/maintenance/under-construction/under-construction2')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon')));
const MaintenanceComingSoon2 = Loadable(lazy(() => import('pages/maintenance/coming-soon/coming-soon2')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const Landing = Loadable(lazy(() => import('pages/landing')));
const ContactUS = Loadable(lazy(() => import('pages/contact-us')));
const PricingPage = Loadable(lazy(() => import('pages/extra-pages/price/price1')));
const PricingPage2 = Loadable(lazy(() => import('pages/extra-pages/price/price2')));

// MY ROUTES

const TransferFunds_Reports = Loadable(lazy(() => import('pages/transaction-reports/TransferFundsReports')))
const DeductFunds_Reports = Loadable(lazy(() => import('pages/transaction-reports/DeductFundsReports')))
const WithdrawalFunds_Reports = Loadable(lazy(() => import('pages/transaction-reports/WithdrawalReports')))
const Deposit_Reports = Loadable(lazy(() => import('pages/transaction-reports/DepositReports')))
const Investment_Reports = Loadable(lazy(() => import('pages/transaction-reports/InvestmentReports')))
const LevelReports = Loadable(lazy(() => import('pages/incomes/LevelReports')));
const TokenReports = Loadable(lazy(() => import('pages/incomes/TokenReports')));
const Invest = Loadable(lazy(() => import('pages/investments/invest')));
const Investreport = Loadable(lazy(() => import('pages/investments/invest-reports')));
const Stakedreport = Loadable(lazy(() => import('pages/investments/staked-report')));

const DirectIncome = Loadable(lazy(() => import('pages/incomes/DirectIncome')));
const ROI = Loadable(lazy(() => import('pages/incomes/ROI')));
const TeamBonus = Loadable(lazy(() => import('pages/incomes/TeamBonus')));
const GeneralSettings = Loadable(lazy(() => import('pages/incomes/GeneralSettings')));

const TransferFunds = Loadable(lazy(() => import('pages/user/TransferFunds')))
const DeductFunds = Loadable(lazy(() => import('pages/user/DeductFunds')))
const AllUsers = Loadable(lazy(() => import('pages/user/AllUsers')))
const DailyTask = Loadable(lazy(() => import('pages/user/DailyTask')))
const UpdateContent = Loadable(lazy(() => import('pages/user/UpdateContent')))

const StopMinting = Loadable(lazy(()=>import('pages/user/StopMinting')))
const StartMinting = Loadable(lazy(()=>import('pages/user/StartMinting')))


const Chat = Loadable(lazy(() => import('pages/support/chat')))

// Rank Rewards
const PendingRankRewards = Loadable(lazy(() => import('pages/rank-rewards/PendingRankRewards')))
const RankRewardsHistory = Loadable(lazy(() => import('pages/rank-rewards/RankRewardsHistory')))

import BanDownline from 'pages/user/BanDownline';
const LevelIncomeBanManagement = Loadable(lazy(() => import('pages/levelIncomeBan/LevelIncomeBanManagement')));
const SecureMinting = Loadable(lazy(() => import('pages/minting/SecureMinting')));



// RBM Dashboard
const RBMDashboard = Loadable(lazy(() => import('pages/rbm-dashboard')));

// ==============================|| MAIN ROUTES ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DashboardDefault />
            },
            {
              path: 'analytics',
              element: <DashboardAnalytics />
            }
          ]
        },
        {
          path: 'user',
          children: [
            {
              path: "updateContent",
              element: <UpdateContent />
            },
            {
              path: 'allUsers',
              element: <AllUsers />
            },
            {
              path: 'dailytask',
              element: <DailyTask />
            },
            {
              path: 'transferFunds',
              element: <TransferFunds />
            },
            {
              path: 'deductFunds',
              element: <DeductFunds />
            },
            {
              path: 'stop-minting',
              element: <StopMinting />
            },
            {
              path: 'start-minting',
              element: <StartMinting />
            },
            {
              path: 'ban-downline',
              element: <BanDownline />
            },
            {
              path: 'level-income-ban',
              element: <LevelIncomeBanManagement />
            },
            {
              path: 'secure-minting',
              element: <SecureMinting />
            }
          ]
        },
        {
          path :'investments',
          children: [
            {
              path: 'invest',
              element: <Invest />
            },
            {
              path: 'invest-report',
              element: <Investreport />
            },
            {
              path: 'staked-report',
              element: <Stakedreport />
            },

          ]
        },
        {
          path: 'transaction-reports',
          children: [
            {
              path: 'invest-reports',
              element: <Investment_Reports />
            },

            {
              path: 'deposits',
              element: <Deposit_Reports />
            },
            {
              path: 'withdrawals',
              element: <WithdrawalFunds_Reports />
            },
            {
              path: 'transfer-fund-reports',
              element: <TransferFunds_Reports />
            },
            {
              path: 'deduct-fund-reports',
              element: <DeductFunds_Reports />
            }
          ]
        },
        {
          path: 'incomes',
          children: [
            {
              path: 'token-reports',
              element: <TokenReports />
            },
            {
              path: 'level-reports',
              element: <LevelReports />
            },
            {
              path: 'roi',
              element: <ROI />
            },
            {
              path: 'direct',
              element: <DirectIncome />
            },
            {
              path: 'general-settings',
              element: <GeneralSettings />
            },
            {
              path: 'team',
              element: <TeamBonus />
            }
          ]
        },
        {
          path: 'support',
          children: [
            {
              path: 'chat',
              element: <Chat />
            }
          ]
        },
        {
          path: 'rank-rewards',
          children: [
            {
              path: 'pending',
              element: <PendingRankRewards />
            },
            {
              path: 'history',
              element: <RankRewardsHistory />
            }
          ]
        },
        {
          path: 'widget',
          children: [
            {
              path: 'statistics',
              element: <WidgetStatistics />
            },
            {
              path: 'data',
              element: <WidgetData />
            },
            {
              path: 'chart',
              element: <WidgetChart />
            }
          ]
        },
        {
          path: 'apps',
          children: [
            {
              path: 'chat',
              element: <AppChat />
            },
            {
              path: 'calendar',
              element: <AppCalendar />
            },
            {
              path: 'kanban',
              element: <AppKanban />,
              children: [
                {
                  path: 'backlogs',
                  element: <AppKanbanBacklogs />
                },
                {
                  path: 'board',
                  element: <AppKanbanBoard />
                }
              ]
            },
            {
              path: 'customer',
              children: [
                {
                  path: 'customer-list',
                  element: <AppCustomerList />
                },
                {
                  path: 'customer-card',
                  element: <AppCustomerCard />
                }
              ]
            },
            {
              path: 'invoice',
              children: [
                {
                  path: 'dashboard',
                  element: <AppInvoiceDashboard />
                },
                {
                  path: 'create',
                  element: <AppInvoiceCreate />
                },
                {
                  path: 'details/:id',
                  element: <AppInvoiceDetails />
                },
                {
                  path: 'edit/:id',
                  element: <AppInvoiceEdit />
                },
                {
                  path: 'list',
                  element: <AppInvoiceList />
                }
              ]
            },
            {
              path: 'profiles',
              children: [
                {
                  path: 'account',
                  element: <AccountProfile />,
                  children: [
                    {
                      path: 'basic',
                      element: <AccountTabProfile />
                    },
                    {
                      path: 'personal',
                      element: <AccountTabPersonal />
                    },
                    {
                      path: 'my-account',
                      element: <AccountTabAccount />
                    },
                    {
                      path: 'password',
                      element: <AccountTabPassword />
                    },
                    {
                      path: 'role',
                      element: <AccountTabRole />
                    },
                    {
                      path: 'settings',
                      element: <AccountTabSettings />
                    }
                  ]
                },
                {
                  path: 'user',
                  element: <UserProfile />,
                  children: [
                    {
                      path: 'personal',
                      element: <UserTabPersonal />
                    },
                    {
                      path: 'payment',
                      element: <UserTabPayment />
                    },
                    {
                      path: 'password',
                      element: <UserTabPassword />
                    },
                    {
                      path: 'settings',
                      element: <UserTabSettings />
                    }
                  ]
                }
              ]
            },
            {
              path: 'e-commerce',
              children: [
                {
                  path: 'products',
                  element: <AppECommProducts />,
                  loader: productsLoader,
                  errorElement: <ErrorBoundary />
                },
                {
                  path: 'product-details/:id',
                  element: <AppECommProductDetails />,
                  loader: productLoader,
                  errorElement: <ErrorBoundary />
                },
                {
                  path: 'product-list',
                  element: <AppECommProductList />,
                  loader: productsLoader,
                  errorElement: <ErrorBoundary />
                },
                {
                  path: 'add-new-product',
                  element: <AppECommAddProduct />
                },
                {
                  path: 'checkout',
                  element: <AppECommCheckout />
                }
              ]
            }
          ]
        },
        {
          path: 'forms',
          children: [
            {
              path: 'validation',
              element: <FormsValidation />
            },
            {
              path: 'wizard',
              element: <FormsWizard />
            },
            {
              path: 'layout',
              children: [
                {
                  path: 'basic',
                  element: <FormsLayoutBasic />
                },
                {
                  path: 'multi-column',
                  element: <FormsLayoutMultiColumn />
                },
                {
                  path: 'action-bar',
                  element: <FormsLayoutActionBar />
                },
                {
                  path: 'sticky-bar',
                  element: <FormsLayoutStickyBar />
                }
              ]
            },
            {
              path: 'plugins',
              children: [
                {
                  path: 'mask',
                  element: <FormsPluginsMask />
                },
                {
                  path: 'clipboard',
                  element: <FormsPluginsClipboard />
                },
                {
                  path: 're-captcha',
                  element: <FormsPluginsRecaptcha />
                },
                {
                  path: 'editor',
                  element: <FormsPluginsEditor />
                },
                {
                  path: 'dropzone',
                  element: <FormsPluginsDropzone />
                }
              ]
            }
          ]
        },
        {
          path: 'tables',
          children: [
            {
              path: 'react-table',
              children: [
                {
                  path: 'basic',
                  element: <ReactTableBasic />
                },
                {
                  path: 'dense',
                  element: <ReactDenseTable />
                },
                {
                  path: 'sorting',
                  element: <ReactTableSorting />
                },
                {
                  path: 'filtering',
                  element: <ReactTableFiltering />
                },
                {
                  path: 'grouping',
                  element: <ReactTableGrouping />
                },
                {
                  path: 'pagination',
                  element: <ReactTablePagination />
                },
                {
                  path: 'row-selection',
                  element: <ReactTableRowSelection />
                },
                {
                  path: 'expanding',
                  element: <ReactTableExpanding />
                },
                {
                  path: 'editable',
                  element: <ReactTableEditable />
                },
                {
                  path: 'drag-drop',
                  element: <ReactTableDragDrop />
                },
                {
                  path: 'column-visibility',
                  element: <ReactTableColumnVisibility />
                },
                {
                  path: 'column-resizing',
                  element: <ReactTableColumnResizing />
                },
                {
                  path: 'sticky-table',
                  element: <ReactTableStickyTable />
                },
                {
                  path: 'umbrella',
                  element: <ReactTableUmbrella />
                },
                {
                  path: 'empty',
                  element: <ReactTableEmpty />
                },
                {
                  path: 'virtualized',
                  element: <ReactTableVirtualized />
                }
              ]
            },
            {
              path: 'mui-table',
              children: [
                {
                  path: 'basic',
                  element: <MuiTableBasic />
                },
                {
                  path: 'dense',
                  element: <MuiTableDense />
                },
                {
                  path: 'enhanced',
                  element: <MuiTableEnhanced />
                },
                {
                  path: 'datatable',
                  element: <MuiTableDatatable />
                },
                {
                  path: 'custom',
                  element: <MuiTableCustom />
                },
                {
                  path: 'fixed-header',
                  element: <MuiTableFixedHeader />
                },
                {
                  path: 'collapse',
                  element: <MuiTableCollapse />
                }
              ]
            }
          ]
        },
        {
          path: 'charts',
          children: [
            {
              path: 'apexchart',
              element: <ChartApexchart />
            },
            {
              path: 'org-chart',
              element: <ChartOrganization />
            }
          ]
        },
        {
          path: 'map',
          element: <Map />
        },
        // {
        //   path: 'sample-page',
        //   element: <SamplePage />
        // },
        {
          path: 'price',
          children: [
            {
              path: 'price1',
              element: <PricingPage />
            },
            {
              path: 'price2',
              element: <PricingPage2 />
            }
          ]
        },
        {
          path: 'fund-transfer',
          element: <TransferFunds />
        },
        {
          path: 'fund-deduct',
          element: <DeductFunds />
        },
        {
          path: '/admin/ban-downline',
          element: <BanDownline />
        },
        
      ]
    },

    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.LANDING} />,
      children: [
        {
          path: 'landing',
          element: <Landing />
        }
      ]
    },
    {
      path: '/',
      element: <SimpleLayout layout={SimpleLayoutType.SIMPLE} />,
      children: [
        {
          path: 'contact-us',
          element: <ContactUS />
        }
      ]
    },
    {
      path: '/whitelist',
      element: <RBMDashboard/>
    },
    {
      path: '/maintenance',
      element: <PagesLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'under-construction2',
          element: <MaintenanceUnderConstruction2 />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        },
        {
          path: 'coming-soon2',
          element: <MaintenanceComingSoon2 />
        }
      ]
    },
    {
      path: '/auth',
      element: <PagesLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        },
        {
          path: 'login2',
          element: <AuthLogin2 />
        },
        {
          path: 'register2',
          element: <AuthRegister2 />
        },
        {
          path: 'forgot-password2',
          element: <AuthForgotPassword2 />
        },
        {
          path: 'reset-password2',
          element: <AuthResetPassword2 />
        },
        {
          path: 'check-mail2',
          element: <AuthCheckMail2 />
        },
        {
          path: 'code-verification2',
          element: <AuthCodeVerification2 />
        },
        {
          path: 'login3',
          element: <AuthLogin3 />
        }
      ]
    },
    //  {
    //   path: '/admin',
    //   element: <PagesLayout />,
    //   children: [
    //     {
    //       path: '/fund-transfer',
    //       element: <TransferFunds />
    //     },
    //     {
    //       path: '/deduct-funds',
    //       element: <AuthRegister />
    //     },

    //   ]
    // },

    {
      path: '*',
      element: <MaintenanceError />
    }
  ]
};

export default MainRoutes;
