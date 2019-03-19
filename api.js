import * as C from '~/constants/api';
import {PostMethod, PostMethodNoMessage} from './handleFetch'


export default {
    uploadFileToData: (url, params) => PostMethod(url, params,true),//上传文件到data
    getLoginCaptcha: (params) => PostMethod(C.GET_LOGIN_CAPTCHA, params, false,"blob"),
    login: (params) => PostMethodNoMessage(C.LOGIN, params), //用户登入
    logout: (params) => PostMethod(C.LOGIN_OUT, params),// 用户注销
    AcquireAllocation: (params) => PostMethod(C.ACQUIRE_ALLOCATION,params),// 登陆模板
    queryMenu: (params) => PostMethod(C.QUERY_MENU, params), //查询菜单

    /*系统管理：管理员管理*/
    queryDict: (params) => PostMethod(C.QUERY_DICT, params),// 查询字典表
    queryAdminList: (params) => PostMethod(C.QUERY_ADMIN_LIST, params),// 管理员管理主页面
    checkLoginName: (params) => PostMethod(C.CHECK_LOGIN_NAME, params),// 验证登录名是否存在
    addOrUpdateAdmin: (params) => PostMethod(C.ADD_OR_UPDATE_ADMIN, params),// 新增修改管理员
    hfAdmin: (params) => PostMethod(C.HF_ADMIN, params),// 恢复管理员账号
    forbiddenAdmin: (params) => PostMethod(C.FORBIDDEN_ADMIN, params),// 禁用管理员账号
    unlockAdmin: (params) => PostMethod(C.UNLOCK_ADMIN, params),// 解锁管理员账号
    resetPassword: (params) => PostMethod(C.RESET_PASSWORD, params),// 重置管理员密码
    deleteAdmin: (params) => PostMethod(C.DELETE_ADMIN, params),// 删除管理员账号
    queryRe: (params) => PostMethod(C.QUERY_RE, params),// 查询管理员可配置的角色列表
    addWork: (params) => PostMethod(C.ADD_WORK, params),// 设置业务线

    /*系统管理：目录管理*/
    queryAllCatalog: (params) => PostMethod(C.QUERY_ALL_CATALOG, params),// 查询目录列表
    addOrUpdateCatalog: (params) => PostMethod(C.ADD_OR_UPDATE_CATALOG, params),// 新增修改目录
    confirmDelResources: (params) => PostMethod(C.CONFIRM_DEL_RESOURCES, params),// 后台是否允许删除所选目录
    deleteResources: (params) => PostMethod(C.DELETE_RESOURCES, params),// 删除目录
    refresh: (params) => PostMethod(C.REFRESH_RESOURCES, params),// 刷新目录
    queryEntityByAllFunction: (params) => PostMethod(C.QUERY_ENTITY_BY_ALL_FUNCTION, params),// 查询功能列表
    saveOrUpdateFunction: (params) => PostMethod(C.SAVE_OR_UPDATE_FUNCTION, params),// 新增修改功能
    delPermissio: (params) => PostMethod(C.DEL_PERMISSIO, params),// 删除功能

    /*系统管理：参数管理*/
    queryEntityByGroupId: (params) => PostMethod(C.QUERY_ENTITY_BY_GROUPID, params),// 查询参数列表
    saveOrUpdateParameter: (params) => PostMethod(C.SAVE_OR_UPDATE_PARAMETER, params),// 新增修改参数
    delParameter: (params) => PostMethod(C.DEL_PARAMETER, params),// 删除参数

    /*系统管理：参数分组管理*/
    queryEntityByAll: (params) => PostMethod(C.QUERY_ENTITY_BY_ALL, params),// 查询参数分组列表
    saveOrUpdateGroup: (params) => PostMethod(C.SAVE_OR_UPDATE_GROUP, params),// 新增修改参数分组
    delGroup: (params) => PostMethod(C.DEL_GROUP, params),// 删除参数分组

    /*系统管理：角色管理*/
    queryRoleList: (params) => PostMethod(C.QUERY_ROLE_LIST, params),// 查询角色列表
    saveRole: (params) => PostMethod(C.SAVE_ROLE, params),// 保存角色
    addOrUpdateRole: (params) => PostMethod(C.ADD_OR_UPDATE_ROLE, params),// 新增修改角色
    deleteRole: (params) => PostMethod(C.DELETE_ROLE, params),// 删除角色
    queryAllPermission: (params) => PostMethod(C.SHOW_MENU_STRUCTURE, params),// 查询菜单结构,授权管理
    savePermission: (params) => PostMethod(C.SAVE_PERMISSION, params),// 保存授权

    /*系统管理：字典管理*/
    dictQueryEntityByAll: (params) => PostMethod(C.DICT_QUERY_ENTITY_BY_ALL, params),// 查询字典列表
    dictSaveOrUpdate: (params) => PostMethod(C.DICT_SAVE_OR_UPDATE, params),// 新增修改字典
    dictQueryLv: (params) => PostMethod(C.DICT_QUERY_LV, params),//查重:验证索引Code是否存在
    queryChildNote: (params) => PostMethod(C.QUERY_CHILD_NOTE, params),//后台所选字典下是否有子节点
    dictDelete: (params) => PostMethod(C.DICT_DELETE, params),//删除字典

    /*系统管理：Banner管理*/
    bannerToMain: (params) => PostMethod(C.BANNER_TO_MAIN, params),//查询Banner列表
    bannerSaveOrUpdate: (params) => PostMethod(C.BANNER_SAVE_OR_UPDATE, params),//新增修改banner
    queryBannerDetail: (params) => PostMethod(C.QUERY_BANNER_DETAIL, params),//查询banner详情
    bannerUploadFile: (params) => PostMethod(C.BANNER_UPLOAD_FILE, params),//上传banner图片
    deleteBanner: (params) => PostMethod(C.BANNER_DELETE, params),//删除banner
    /*消息管理：广播消息*/
    queryBroadList: (params) => PostMethod(C.QUERY_BROAD_LIST, params),// 查询广播列表
    addOrUpdateBroad: (params) => PostMethod(C.ADD_OR_UPDATE_BROAD, params),// 新增或者修改广播
    delBroad: (params) => PostMethod(C.DEL_BROAD, params),// 删除广播

    /*消息管理：发布消息*/
    getMySend: (params) => PostMethod(C.GET_MY_SEND, params),// 查询我发出的消息
    getNoticeRole: (params) => PostMethod(C.GET_NOTICE_ROLE, params),// 查询通知角色的角色列表
    getManager: (params) => PostMethod(C.GET_MANAGER, params),// 查询消息通知所有人
    addMessage: (params) => PostMethod(C.ADD_MESSAGE, params),// 新增消息
    backMessage: (params) => PostMethod(C.BACK_MESSAGE, params),// 撤回消息
    getMessage: (params) => PostMethod(C.GET_MESSAGE, params),// 查看消息详情

    /*消息管理：消息列表*/
    getMyMessage: (params) => PostMethod(C.GET_MY_MESSAGE, params),// 消息列表
    setRead: (params) => PostMethod(C.SET_READ, params),// 设为已读
    delMessage: (params) => PostMethod(C.DEL_MESSAGE, params),// 删除消息
    queryMessageCount: (params) => PostMethod(C.QUERY_MESSAGE_COUNT, params),// 查询未读消息条数

    /*个人设置：个人资料*/
    queryEntity: (params) => PostMethod(C.QUERY_ENTITY, params),//查询个人资料
    updateAdmin: (params) => PostMethod(C.UPDATE_ADMIN, params),//修改个人资料

    /*个人设置：安全设置*/
    queryLoginName: (params) => PostMethod(C.QUERY_LOGIN_NAME, params),
    sendRandomCaptcha: (params) => PostMethod(C.SEND_RANDOM_CAPTCHA, params),
    getVerification: (params) => PostMethod(C.GET_VERIFICATION, params),//发送手机或邮箱验证码
    updatePhoneOrEmail: (params) => PostMethod(C.UPDATE_EMAIL_OR_PHONE, params),//绑定手机或邮箱
    modifyPassword: (params) => PostMethod(C.UPDATE_PASSWORD, params),//修改密码
    modifyPassword1: (params) => PostMethod(C.MODIFY_PASSWORD, params),//修改密码（登录页）

    /*短信统计*/
    getNoteInfo: (params) => PostMethod(C.GET_NOTE_INFO, params),// 查询短信的余额和单价
    getNoteHistory: (params) => PostMethod(C.GET_NOTE_HISTORY, params),// 对所有的短信记录进行分页查询
    getStatistics: (params) => PostMethod(C.GET_STATISTICS, params),//查询统计查询统计

    /* 组织 */
    getOrgCompanyManageTableInfo: (params) => PostMethod(C.GET_COMPANY_INFO, params),//查询组织-公司管理页面的table信息
    updateCompanyEmail: (params) => PostMethod(C.UPDATE_COMPANY_EMAIL, params),//查询组织-更新公司邮箱
    // 组织 ： 员工管理
    queryEmpList: ( params ) => PostMethod(C.QUERY_EMPLIST, params), //查询所有员工列表
    delEmp: ( params ) => PostMethod(C.DEL_EMP, params),//删除员工
    queryWork: (params) => PostMethod(C.QUERY_WORK, params),//查询所有业务线
    queryByParentId: (params) => PostMethod(C.QUERY_BY_PARENT_ID, params),//根据父ID查询公司、部门
    queryEmpDetails: (params) => PostMethod(C.QUERY_EMP_DETAILS, params),//查询员工详情
    saveOrUpdateEmp: (params) => PostMethod(C.SAVE_OR_UPDATE_EMP, params),//新增或修改员工


    /*薪资：文件数据管理 - 考勤*/
    queryFileDataTimes: (params) => PostMethod(C.QUERY_FILE_DATA_TIMES, params),// 查询文件数据时间（降序）
    queryAttendanceData: (params) => PostMethod(C.QUERY_ATTENDANCE_DATA, params),// 查询考勤数据列表
    delAttendanceData: (params) => PostMethod(C.DEL_ATTENDANCE_DATA, params),// 删除员工考勤数据
    queryRepeatData: (params) => PostMethod(C.QUERY_REPEAT_DATA, params),// 查询员工重复考勤数据
    selectAttendanceData: (params) => PostMethod(C.SELECT_ATTENDANCE_DATA, params),// 选择员工考勤数据
    uploadAttendancedata: (params) => PostMethod(C.UPLOAD_ATTENDANCE_DATA, params),// 上传考勤数据
    updateData: (params) => PostMethod(C.UPDATE_DATA, params),// 考勤应用
    cancelUpdateData: (params) => PostMethod(C.CANCEL_UPDATE_DATA, params),// 考勤取消应用
    saveOrDelUploadFile: (params) => PostMethod(C.SAVE_OR_DEL_UPLOAD_FILE, params),//保存或删除上传文件

    /*薪资：文件数据管理 - 社保*/
    querySocialData: (params) => PostMethod(C.QUERY_SOCIAL_DATA, params),// 查询社保数据列表
    delSocialData: (params) => PostMethod(C.DEL_SOCIAL_DATA, params),//   删除员工社保数据
    useSocialData: (params) => PostMethod(C.USE_SOCIAL_DATA, params),//   应用社保数据
    cancelSocialData: (params) => PostMethod(C.CANCEL_SOCIAL_DATA, params),//  取消社保数据
    queryRepeatlSocialData: (params) => PostMethod(C.QUERY_REPEAT_SEC_DATA, params),//  查询员工重复社保数据
    selectOneSocialData: (params) => PostMethod(C.SELECT_REPEAT_SOCIAL_DATA, params),//  从重复数据中选择一条
    sumSocialData: (params) => PostMethod(C.SUM_SOCIAL_DATA, params),//  选择叠加社保

    /*薪资：文件数据管理：公积金*/
    queryCommonFund: (params) => PostMethod(C.QUERY_COMMON_FUND, params),// 查询公积金数据
    delCommonFund: (params) => PostMethod(C.DEL_COMMON_FUND, params),// 删除公积金数据
    queryRepatCommonFund: (params) => PostMethod(C.QUERY_REPEAT_COMMON_FUND, params),// 查询员工重复公积金数据
    selectCommonFund: (params) => PostMethod(C.SELECT_COMMON_FUND, params),// 选择公积金数据
    countCommonFund: (params) => PostMethod(C.COUNT_COMMON_FUND, params),// 叠加公积金
    uploadCommonFund: (params) => PostMethod(C.UPLOAD_COMMON_FUND, params),// 上传公积金数据
    useCommonFund: (params) => PostMethod(C.USE_COMMON_FUND, params),// 应用公积金数据
    cancelUseCommonFund: (params) => PostMethod(C.CANCEL_USE_COMMON_FUND, params),// 取消应用公积金数据

    /*薪资：文件数据管理 代扣代缴*/
    queryWithHeldData: (params) => PostMethod(C.QUERY_WITH_HELD_DATA, params),// 查询代扣代缴数据
    delWithHeldData: (params) => PostMethod(C.DEL_WITH_HELD_DATA, params),// 删除代扣代缴数据
    queryRepeatWithHeldData: (params) => PostMethod(C.QUERY_REPEAT_WITH_HELD_DATA, params),// 查询代扣代缴重复数据
    selectWithHeldData: (params) => PostMethod(C.SELECT_WITH_HELD_DATA, params),// 选择一条重复代扣代缴数据
    countWithHeldData: (params) => PostMethod(C.COUNT_WITH_HELD_DATA, params),// 叠加代扣代缴数据
    useWithHeldData: (params) => PostMethod(C.USE_WITH_HELD_DATA, params),// 应用代扣代缴数据
    cancelUseWithHeldData: (params) => PostMethod(C.CANCEL_USE_WITH_HELD_DATA, params),// 取消代扣代缴数据



    // 薪资：薪资管理
    queryAdministrationMonthList:(params)=>PostMethod(C.QUERY_ADMINISTRATION_MONTH_LIST, params),//查询薪资管理月份列表
    queryMonthlySalary:(params)=>PostMethod(C.QUERY_MONTHLY_SALARY, params),//查询薪资管理中的月薪
    addAdministrationMonth:(params)=>PostMethod(C.ADD_ADMINISTRATION_MONTH, params),//薪资报告新增月份
    queryMonthSalaryCanAddUserList:(params)=>PostMethod(C.QUERY_MONTH_SALARY_CAN_ADD_USER_LIST, params),//查询薪资管理中还可以添加的员工
    addMonthSalaryUser:(params)=>PostMethod(C.ADD_MONTH_SALARY_USER, params),//薪资管理月薪添加用户
    settlementMonthSalary:(params)=>PostMethod(C.SET_TLEMENT_MONTH_SALARY, params),//结算薪资管理中的月薪
    uploadComparisonTaxes:(params)=>PostMethod(C.UPLOAD_COMPARISON_TAXES, params),//上传个税对比文件
    sendEmailByMonthSalary:(params)=>PostMethod(C.SEND_EMAIL_BY_MONTH_SALARY, params),//发送月薪个人报告邮件
    queryMonthSalaryDetails:(params)=>PostMethod(C.QUERY_MONTH_SALARY_DETAILS, params),//查询用户月薪详情
    delMonthlySalary:(params)=>PostMethod(C.DEL_MONTHLY_SALARY, params),//删除用户的月薪结算报告

    //薪资：薪资配置
    allocationQueryToMain:(params)=>PostMethod(C.ALLOCATION_QUERY_TO_MAIN, params),//薪资配置主页查询
    queryBusinessLine:(params)=>PostMethod(C.QUERY_BUSINESS_LINE, params),//根据管理员类型查询业务线
    selectOrNoSelect:(params)=>PostMethod(C.SELECT_OR_NO_SELECT, params),//新增查询已选择或者未选择的业务线
    allocationSaveOrUpdate:(params)=>PostMethod(C.ALLOCATION_SAVE_OR_UPDATE, params),//新增或者修改薪资配置
    delPostage:(params)=>PostMethod(C.DEL_POSTAGE, params),//删除资费
    queryOperation:(params)=>PostMethod(C.QUERY_OPERATION, params),//查询是否能操作该业务

    //薪资：系统数据管理
    queryMonth:(params)=>PostMethod(C.QUERY_MONTH, params),//查询薪资月份
    systemDataQueryToMain:(params)=>PostMethod(C.SYSTEM_DATA_QUERY_TO_MAIN, params),//系统数据管理主页查询
    queryEmployee:(params)=>PostMethod(C.QUERY_EMPLOYEE, params),//查询当前月所有员工
    updateSalary:(params)=>PostMethod(C.UPDATE_SALARY, params),//批量修改薪资项目
    updateDate:(params)=>PostMethod(C.UPDATE_DATE, params),//修改员工薪资
    systemDataUse:(params)=>PostMethod(C.SYSTEM_DATA_USE, params),//应用月薪
    systemDataCancelUse:(params)=>PostMethod(C.SYSTEM_DATA_CANCEL_USE, params),//取消应用月薪
    importInformation:(params)=>PostMethod(C.IMPORT_INFORMATION, params),//导入员工信息

};
