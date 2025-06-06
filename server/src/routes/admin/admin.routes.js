const Router = require("express").Router();
/**
 * Controllers
 */

const {
    /**
     * CRONS
     */
    cronController,

    adminSetupController,
    adminAuthController,
    adminInfoController,
    adminController,
    adminUserController,
    adminDepositController,
    adminFundDeductController,
    adminFundTransferController,
    adminIncomeController,
    adminInvestmentController,
    adminInvestmentPlanController,
    adminMessageController,
    adminSettingController,
    adminWithdrawalController,
    adminLevelIncomeBanController,
    adminSecureMintingController,
    userController
} = require("../../controllers");

/**
 * Middlewares
 */

const {
    adminAuthenticateMiddleware,
    validationMiddleware,
    cronMiddleware
} = require("../../middlewares");

/**
 * Validations
 */

const {
    adminAuthValidation,
    adminInfoValidation,
    adminValidation,
    userValidation,
    depositValidation,
    fundDeductValidation,
    fundTransferValidation,
    incomeValidation,
    investmentValidation,
    investmentPlanValidation,
    messageValidation,
    withdrawalValidation,
    settingValidation
} = require("../../validations");

const multerService = require('../../services/multer');

module.exports = () => {
    /**
     * Login Route
     */
    Router.post(
        "/login",
        validationMiddleware(adminAuthValidation.login, "body"),
        adminAuthController.login
    );


    /**********************
     * AUTHORIZED ROUTES
     **********************/
    /**
     * Middlerware for Handling Request Authorization
     */
    Router.use("/", adminAuthenticateMiddleware);

    // GET REPORTS IN CSV FILE
    Router.get('/get-reports-in-csv/:type', adminController.getReportsInCSV);

    // Routes by KARTIK
    Router.get("/setup-db", adminSetupController.setup)
    Router.get("/reset-setup-db", adminController.reset_db)
    Router.post("/user-login-request", validationMiddleware(adminValidation.user_login_request, 'body'), adminController.user_login_request)
    Router.get("/get-all-users-data", adminController.get_all_users_data)
    Router.post("/reset-device-id", adminController.resetDeviceToken)

    Router.put("/update-user-profile", [multerService.uploadFile('avatar').single('user_avatar'), validationMiddleware(adminInfoValidation.updateUserProfile, "body")], adminInfoController.updateUserProfile);
    Router.put("/update-general-settings", validationMiddleware(settingValidation.addUpdate, "body"), adminSettingController.add_update);

    Router.post("/update-content", [multerService.uploadFile('image').single("banner"), validationMiddleware(adminInfoValidation.updateContent, "body")], adminInfoController.updateContent);

    Router.get("/get-profile", adminInfoController.profile);
    Router.put("/update-profile", [multerService.uploadFile('avatar').single('admin_avatar'), validationMiddleware(adminInfoValidation.updateProfile, "body")], adminInfoController.updateProfile);
    Router.put('/change-password', validationMiddleware(adminInfoValidation.changePassword, 'body'), adminInfoController.changePassword);

    Router.get("/get-all-admins", adminController.getAll);
    Router.get("/get-admin/:id", adminController.getOne);
    Router.post("/add-admin", validationMiddleware(adminValidation.add, 'body'), adminController.add);
    Router.put("/update-admin", validationMiddleware(adminValidation.update, 'body'), adminController.update);

    Router.get("/get-all-users", adminUserController.getAll);
    Router.get("/get-daily-task-data", adminUserController.get_daily_task_data);
    Router.get("/get-daily-task-data2", adminUserController.get_daily_task_data2);
    Router.get("/get-user/:id", adminUserController.getOne);
    Router.get("/get-user-count", adminUserController.getCount);
    Router.get("/get-user-downline", adminUserController.getDownline);
    Router.put("/update-user", validationMiddleware(userValidation.update, 'body'), adminUserController.update);

    Router.post("/ban-downline/:id", adminUserController.banDownline);
    Router.post("/unban-downline/:id", adminUserController.unbanDownline);

    // USER SOCIAL VWERIFICATION
    Router.post('/approveSocial/', adminController.approveSocial)
    Router.post('/approveAllSocial/', adminController.approveAllSocial)
    Router.post('/rejectSocial/', adminController.rejectSocial)
    // TODO: check from here
    Router.get("/get-all-messages-inbox", adminMessageController.getAllInbox);
    Router.get("/get-all-messages-sent", adminMessageController.getAllSent);
    Router.get("/get-message/:id", adminMessageController.getOne);
    Router.get("/get-message-count", adminMessageController.getCount);
    Router.post("/add-message", validationMiddleware(messageValidation.add, 'body'), adminMessageController.add);
    Router.put("/update-message", validationMiddleware(messageValidation.update, 'body'), adminMessageController.update);

    Router.get("/get-all-settings", adminSettingController.getAll);
    Router.get("/get-setting/:id", adminSettingController.getOne);
    Router.get("/get-setting-with-name/:name", adminSettingController.getOneByQuery);
    Router.post("/add-setting", validationMiddleware(settingValidation.add, 'body'), adminSettingController.add);
    Router.put("/update-setting", validationMiddleware(settingValidation.update, 'body'), adminSettingController.update);
    Router.delete("/delete-setting/:id", adminSettingController.delete);

    // Get all investment plans
    Router.get('/get-all-investment-plans', adminInvestmentPlanController.getAll);

    // Get a single investment plan by ID
    Router.get('/get-investment-plan/:id', adminInvestmentPlanController.getOne);

    // Add a new investment plan
    Router.post('/add-investment-plan', adminInvestmentPlanController.add);

    // Update an existing investment plan by ID
    Router.put('/update-investment-plan/:id', adminInvestmentPlanController.update);

    // Delete an investment plan by ID
    Router.delete('/delete-investment-plan/:id', adminInvestmentPlanController.delete);

    Router.delete('/delete-investment-plan/:id', adminInvestmentPlanController.delete);
    Router.get("/get-all-investments", adminInvestmentController.getAll);
    Router.get("/get-all-stacked", adminInvestmentController.getAllStacked);
    Router.get("/get-investment/:id", adminInvestmentController.getOne);
    Router.get("/get-investment-sum", adminInvestmentController.getSum);

    Router.get("/get-all-incomes", adminIncomeController.getAll);
    Router.get("/get-income/:id", adminIncomeController.getOne);
    Router.get("/get-income-sum", adminIncomeController.getSum);

    Router.get("/get-all-fund-deducts", adminFundDeductController.getAll);
    Router.get("/get-fund-deduct/:id", adminFundDeductController.getOne);
    Router.get("/get-fund-deduct-sum", adminFundDeductController.getSum);
    Router.post("/add-fund-deduct", validationMiddleware(fundDeductValidation.add, 'body'), adminFundDeductController.add);

    Router.get("/get-all-fund-transfers", adminFundTransferController.getAll);
    Router.get("/get-fund-transfer/:id", adminFundTransferController.getOne);
    Router.get("/get-fund-transfer-sum", adminFundTransferController.getSum);
    Router.post("/add-fund-transfer", validationMiddleware(fundTransferValidation.add, 'body'), adminFundTransferController.add);

    Router.get("/get-all-deposits", adminDepositController.getAll);
    Router.get("/get-deposit/:id", adminDepositController.getOne);
    Router.get("/get-deposit-sum", adminDepositController.getSum);
    Router.put("/update-deposit", validationMiddleware(depositValidation.update, 'body'), adminDepositController.update);

    Router.get("/get-all-withdrawals", adminWithdrawalController.getAll);
    Router.get("/get-withdrawal/:id", adminWithdrawalController.getOne);
    Router.get("/get-withdrawal-sum", adminWithdrawalController.getSum);
    Router.put("/update-withdrawal", validationMiddleware(withdrawalValidation.update, 'body'), adminWithdrawalController.update);
       
       // Route for handle Off the minting

    Router.post("/stop-minting/:id", adminWithdrawalController.stopMinting);
    Router.post("/start-minting/:id", adminWithdrawalController.startMinting);

    // Rank Reward Management Routes
    Router.use("/rank-rewards", require("./rankReward.routes"));

    // Level Income Ban Management Routes
    Router.get("/level-income-bans", adminLevelIncomeBanController.getAllUsersWithBanStatus);
    Router.get("/level-income-bans/stats", adminLevelIncomeBanController.getLevelIncomeStats);
    Router.get("/level-income-bans/user/:userId/history", adminLevelIncomeBanController.getUserBanHistory);
    Router.post("/level-income-bans/ban/:userId", adminLevelIncomeBanController.banUserFromLevelIncome);
    Router.post("/level-income-bans/unban/:userId", adminLevelIncomeBanController.unbanUserFromLevelIncome);

    // Quick Ban/Unban by Username Routes
    Router.post("/level-income-bans/ban-by-username", adminLevelIncomeBanController.banUserByUsername);
    Router.post("/level-income-bans/unban-by-username", adminLevelIncomeBanController.unbanUserByUsername);

    // Secure Minting Routes
    Router.get("/minting/prepare-minting", adminSecureMintingController.prepareMinting);
    Router.post("/minting/confirm-batch", adminSecureMintingController.confirmBatch);
    Router.get("/minting/history", adminSecureMintingController.getMintingHistory);

    /**************************
     * END OF AUTHORIZED ROUTES
     **************************/

    return Router;
};
