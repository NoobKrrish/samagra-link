//------------------Fill DDO Dropdown Method-------------------------//
function DDO(DropdownObject, BlockID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (BlockID == undefined) {
        BlockID = 0;
    }
    var HandlerUrl = "/Handlers/DDO.ashx?BlockID=" + BlockID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill DDO Dropdown Method-------------------------//

//------------------Fill Caste Dropdown Method-------------------------//
function UploadDocument(DropdownObject, Document_Type_Id, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (Document_Type_Id == undefined) {
        Document_Type_Id = 0;
    }
    var HandlerUrl = "/Handlers/UploadDocument.ashx?Document_Type_Id=" + Document_Type_Id;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

// ---------------Institute managment----------------

function Funding_Sources(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }

    var HandlerUrl = "/WelFareInstitutions/Handlers/Funding_Sources.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
function Institutions(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }

    var HandlerUrl = "/WelFareInstitutions/Handlers/Institutions_Type.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

function DisabilityType(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }

    var HandlerUrl = "/WelFareInstitutions/Handlers/DisabilityType.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}


function Residant_Type(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }

    var HandlerUrl = "/WelFareInstitutions/Handlers/Residant_Type.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

function Get_Institute(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }

    //var HandlerUrl = "/Handlers/Get_Institute_For_Members.ashx?Villagewarid=" + Villagewarid;
    var HandlerUrl = "/WelFareInstitutions/Handlers/Get_Institute_For_Members.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------Fill Marital Startus Dropdown Method-------------------------//
function MaritalStatus(DropdownObject, GenderID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (GenderID == undefined) {
        GenderID = 0;
    }
    var HandlerUrl = "/Handlers/MaritalStatus.ashx?GenderID=" + GenderID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Month Dropdown Method-------------------------//
function Months(DropdownObject, YearID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (YearID == undefined) {
        YearID = 0;
    }
    var HandlerUrl = "/Handlers/Months.ashx?YearId=" + YearID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Year Dropdown Method-------------------------//
function Years(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/Years.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Population Card Type Method-------------------------//
function PopulationCardTypes(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/PopulationCardTypes.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Designations Dropdown Method-------------------------//
function Designations(DropdownObject, DepartmentID, OfficeTypeID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DepartmentID == undefined) {
        DepartmentID = 0;
    }
    if (OfficeTypeID == undefined) {
        OfficeTypeID = 0;
    }
    var HandlerUrl = "/Handlers/Designations.ashx?DepartmentID=" + DepartmentID + "&OfficeTypeID=" + OfficeTypeID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill saadhikar Schemes Dropdown Method-------------------------//
function SaadhikarSchemes(DropdownObject, DepartmentID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DepartmentID == undefined) {
        DepartmentID = 0;
    }
    var HandlerUrl = "/Handlers/SaadhikarSchemesFill.ashx?DepartmentID=" + DepartmentID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Office Level Dropdown Method-------------------------//
function OfficeLevel(DropdownObject, valueToBeSelect, LoginOfficeLevelID) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/OfficeLevel.ashx?LoginOfficeLevelID=" + LoginOfficeLevelID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Office Type Dropdown Method-------------------------//
function OfficeType(DropdownObject, valueToBeSelect, OfficeLevelID, DepartmentID) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (OfficeLevelID == undefined) {
        OfficeLevelID = 0;
    }
    if (DepartmentID == undefined) {
        DepartmentID = 0;
    }
    var HandlerUrl = "/Handlers/OfficeTypes.ashx?OfficeLevelID=" + OfficeLevelID + "&DepartmentID=" + DepartmentID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill offices Method-------------------------//
function Offices(DropdownObject, HODID, OfficeLevelID, OfficeTypeID, DistrictID, LBID, GPZoneID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (HODID == undefined) {
        HODID = 0;
    }
    if (OfficeLevelID == undefined) {
        OfficeLevelID = 0;
    }
    if (OfficeTypeID == undefined) {
        OfficeTypeID = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    if (LBID == undefined) {
        LBID = 0;
    }
    if (GPZoneID == undefined) {
        GPZoneID = 0;
    }
    var HandlerUrl = "/Handlers/Offices.ashx?HODID=" + HODID + "&OfficeLevelID=" + "&OfficeTypeID=" + OfficeTypeID + "&DistrictID=" + DistrictID + "&LBID=" + LBID + "&GPZoneID=" + GPZoneID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill hospital Type Dropdown Method-------------------------//
function HospitalType(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/HospitalTypes.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Infant Type Dropdown Method-------------------------//
function InfantType(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/InfantType.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Pension Type Dropdown Method-------------------------//
function PensionTypes(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/Pensiontype.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Maternity Place Type Dropdown Method-------------------------//
function MaternityPlace(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/MaternityPlace.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Bank Type Dropdown Method-------------------------//
function BankType(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/BankType.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill APMC Dropdown Method-------------------------//
function APMCs(DropdownObject, DistrictID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    var HandlerUrl = "/Handlers/APMC.ashx?DistrictID=" + DistrictID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Bank Dropdown Method-------------------------//
function Banks(DropdownObject, BankTypeID, valueToBeSelect, lable) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (BankTypeID == undefined) {
        BankTypeID = 0;
    }
    if (lable == undefined) {
        lable = 0;
    }
    var HandlerUrl = "/Handlers/Banks.ashx?BankTypeID=" + BankTypeID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect, lable);
}

//------------------Fill Class Dropdown Method-------------------------//
function Classes(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/Class.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------ Fill Board Dropdown Method-------------------------//
function Board(DropdownObject, ClassId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (ClassId == undefined) {
        ClassId = 0;
    }
    var HandlerUrl = "/Handlers/Board.ashx?ClassId=" + ClassId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------Fill Block Dropdown Method-------------------------//

function Blocks(DropdownObject, DistrictID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    var HandlerUrl = "/Handlers/Blocks.ashx?DistrictID=" + DistrictID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Member LIst Dropdown Method-------------------------//
function MemberListDD(DropdownObject, FamilyId, MemberID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (FamilyId == undefined) {
        DistrictID = 0;
    }
    if (MemberID == undefined) {
        OilCompanyId = 0;
    }

    var HandlerUrl = "/Handlers/MemberListByFamilyID.ashx?MemberID=" + MemberID + "&FamilyId=" + FamilyId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Gas Agencies Dropdown Method-------------------------//
function GasAgencies(DropdownObject, DistrictID, OilCompanyId, SearchString, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    if (OilCompanyId == undefined) {
        OilCompanyId = 0;
    }
    if (SearchString == undefined) {
        SearchString = 0;
    }
    var HandlerUrl = "/Handlers/GasAgencies.ashx?DistrictID=" + DistrictID + "&OilCompanyID="; +OilCompanyId + "&SearchString=" + SearchString;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Gas Agencies Dropdown Method-------------------------//
function FPS(DropdownObject, DistrictID, VWID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    if (VWID == undefined) {
        VWID = 0;
    }
    var HandlerUrl = "/Handlers/FPS.ashx?DistrictID=" + DistrictID + "&VWID="; +VWID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Bank Branch Dropdown Method-------------------------//
function BankBranch(DropdownObject, BankID, DistrictID, valueToBeSelect, lable) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (BankID == undefined) {
        BankID = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    if (lable == undefined) {
        lable = 0;
    }
    var HandlerUrl = "/Handlers/BankBranch.ashx?DistrictID=" + DistrictID + "&BankID=" + BankID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect, lable);
}
//------------------Fill Hospitals Dropdown Method-------------------------//
function Hospitals(DropdownObject, DistrictID, LBID, HType, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (LBID == undefined) {
        LBID = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    if (HType == undefined) {
        HType = 0;
    }
    var HandlerUrl = "/Handlers/Hospitals.ashx?DistrictID=" + DistrictID + "&LBID=" + LBID + "&HType=" + HType;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Bank Dropdown Method-------------------------//
function FI(DropdownObject, FITypeID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (FITypeID == undefined) {
        FITypeID = 0;
    }
    var HandlerUrl = "/Handlers/FI.ashx?FITypeID=" + FITypeID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------Fill Relation Dropdown Method-------------------------//
function EducationalClasses(DropdownObject, EduTypeId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (EduTypeId == undefined) {
        EduTypeId = 0;
    }
    var HandlerUrl = "/Handlers/EducationalClasses.ashx?EduTypeId=" + EduTypeId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Discontinue Reason Dropdown Method-------------------------//
function DiscontinueReasons(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/PensionDiscontinueReason.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------Fill Work Type Dropdown Method-------------------------//
function WorkTypes(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/LabourWorkType.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Work Trade Dropdown Method-------------------------//
function WorkTypesTrade(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/LabourWorkTypeTrade.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------Fill Members List By Labour Scheme  Dropdown Method-------------------------//
function MemberListByScheme(DropdownObject, SchemeID, BMID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (SchemeID == undefined) {
        SchemeID = 0;
    }
    if (BMID == undefined) {
        BMID = 0;
    }

    var HandlerUrl = "/Handlers/FillMemberListByLabourScheme.ashx?SchemeID=" + SchemeID + "&BMID=" + BMID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------Fill Categories for videos Dropdown Method-------------------------//
function VideoCategory(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/VideoCategory.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Videos sub categoris Dropdown Method-------------------------//
function VideoSubCategory(DropdownObject, CategoryID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (CategoryID == undefined) {
        CategoryID = 0;
    }
    var HandlerUrl = "/Handlers/VideosSubCategory.ashx?CategoryID=" + CategoryID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Division Dropdown Method-------------------------//
function Divisions(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/Division.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Disricts Dropdown Method-------------------------//
function Districts(DropdownObject, DivisionID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DivisionID == undefined) {
        DivisionID = 0;
    }
    var HandlerUrl = "/Handlers/Districts.ashx?DivisionID=" + DivisionID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
function District(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }

    var HandlerUrl = "/Handlers/District.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Family Member List Dropdown Method-------------------------//
function FamilyMembers(DropdownObject, FID, DID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (FID == undefined) {
        FID = 0;
    }
    if (DID == undefined) {
        DID = 0;
    }
    var HandlerUrl = "/Handlers/FamilyMemberList.ashx?FID=" + FID + "&DID=" + DID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Categories Dropdown Method-------------------------//
function Categories(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }

    var HandlerUrl = "/Handlers/Categories.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Caste Dropdown Method-------------------------//
function Caste(DropdownObject, CategoryID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (CategoryID == undefined) {
        CategoryID = 0;
    }
    var HandlerUrl = "/Handlers/Caste.ashx?CategoryID=" + CategoryID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Category Dropdown Method-------------------------//
function Category(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/Categories.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------Fill Sectors Dropdown Method-------------------------//
function Sectors(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }

    var HandlerUrl = "/Handlers/Sectors.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill GPSchemes Dropdown Method-------------------------//
function GPSchemes(DropdownObject, SectorID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (SectorID == undefined) {
        SectorID = 0;
    }
    var HandlerUrl = "/Handlers/GPSchemes.ashx?SectorID=" + SectorID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Year by SchemeID Dropdown Method-------------------------//
function GPSchemeYears(DropdownObject, SchemeID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (SchemeID == undefined) {
        SchemeID = 0;
    }
    var HandlerUrl = "/Handlers/GPSchemeYear.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill GpDepartment Dropdown Method-------------------------//
function GPDepartment(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }

    var HandlerUrl = "/Handlers/GpDepartment.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Year by SchemeID Dropdown Method-------------------------//
function GPDepDesignation(DropdownObject, DepID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DepID == undefined) {
        DepID = 0;
    }
    var HandlerUrl = "/Handlers/GPDesignation.ashx?DepID=" + DepID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Schemes Dropdown Method-------------------------//
function Schemes(DropdownObject, SectorID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (SectorID == undefined) {
        SectorID = 0;
    }
    var HandlerUrl = "/Handlers/Schemes.ashx?SectorID=" + SectorID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Tehsil Dropdown Method-------------------------//
function Tehsil(DropdownObject, DistrictID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    var HandlerUrl = "/Handlers/Tehsil.ashx?DistrictID=" + DistrictID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Local body Dropdown Method-------------------------//
function LocalBody(DropdownObject, OfcID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (OfcID == undefined) {
        OfcID = 0;
    }
    var HandlerUrl = "/Handlers/LocalBody_byOfc.ashx?ofcID=" + OfcID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Localbody Types Dropdown Method-------------------------//
function LocalbodyTypes(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/LocalbodyTypes.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Death Reason Dropdown Method-------------------------//

function DeathReason(DropdownObject, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    var HandlerUrl = "/Handlers/DeathReson.ashx";
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Gp Zone Dropdown Method-------------------------//
function GpZones(DropdownObject, LbId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (LbId == undefined) {
        LbId = 0;
    }
    var HandlerUrl = "/Handlers/GpZones.ashx?LbId=" + LbId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}


//------------------Fill aaganBadi CDPO Society Dropdown Method-------------------------//

function DistrictCDPO(DropdownObject, DistrictID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }

    var HandlerUrl = "/Handlers/CDPO_By_District.ashx?DistrictID=" + DistrictID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

function CDPOSectors(DropdownObject, CDPOId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (CDPOId == undefined) {
        CDPOId = 0;
    }
    var HandlerUrl = "/Handlers/SectorsbyCDPO.ashx?CDPOId=" + CDPOId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

function AaganBadiBySectors(DropdownObject, SectorIDId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (SectorIDId == undefined) {
        SectorIDId = 0;
    }
    var HandlerUrl = "/Handlers/AanganBadi.ashx?SectorIDId=" + SectorIDId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Marriage Society Dropdown Method-------------------------//
function MarriageSociety(DropdownObject, LbId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (LbId == undefined) {
        LbId = 0;
    }
    var HandlerUrl = "/Handlers/MarriageSociety.ashx?LbId=" + LbId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Localbodies Dropdown Method-------------------------//
function MAndiLocalbodies(DropdownObject, MandiID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (MAndiID == undefined) {
        MAndiID = 0;
    }
    var HandlerUrl = "/Handlers/MandiLocalbodies.ashx?MandiID=" + MandiID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

function Localbodies_RU(DropdownObject, DistrictID, Is_Rural, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    if (Is_Rural == undefined) {
        Is_Rural = 0;
    }
    var HandlerUrl = "/Handlers/localbodies.ashx?DistrictID=" + DistrictID + "&Is_Rural=" + Is_Rural;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

function SubCast(DropdownObject, CategoryId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (CategoryId == undefined) {
        CategoryId = 0;
    }

    var HandlerUrl = "/Handlers/SubCast.ashx?CategoryId=" + CategoryId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Mill Dropdown Method-------------------------//
function Mills(DropdownObject, DistrictID, LBID, FamilyId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    if (LBID == undefined) {
        LBID = 0;
    }
    if (FamilyId == undefined) {
        FamilyId = 0;
    }
    var HandlerUrl = "/Handlers/Mills.ashx?DistrictID=" + DistrictID + "&LBID=" + LBID + "&FamilyId=" + FamilyId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

function Localbodies(DropdownObject, DistrictID, LBTypeID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DistrictID == undefined) {
        DistrictID = 0;
    }
    if (LBTypeID == undefined) {
        LBTypeID = 0;
    }
    var HandlerUrl = "/Handlers/localbodies.ashx?DistrictID=" + DistrictID + "&LBTypeID=" + LBTypeID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------Fill Village/Ward Dropdown Method-------------------------//
function VillageWards(DropdownObject, GZId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (GZId == undefined) {
        GZId = 0;
    }
    var HandlerUrl = "/Handlers/VillageWards.ashx?GpZoneId=" + GZId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

function VillageWardsLocalbodyWise(DropdownObject, LBId, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (LBId == undefined) {
        LBId = 0;
    }
    var HandlerUrl = "/Handlers/VillageWardsLocalbodyWise.ashx?LBId=" + LBId;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}

//------------------Fill Village/Ward Dropdown Method-------------------------//
function Colonies(DropdownObject, VWID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (VWID == undefined) {
        VWID = 0;
    }
    var HandlerUrl = "/Handlers/Colonies.ashx?VWID=" + VWID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}


//------------------Fill Village/Ward Dropdown Method-------------------------//
function VillageWardsBySocietyId(DropdownObject, DID, SID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DID == undefined) {
        DID = 0;
    }
    if (SID == undefined) {
        SID = 0;
    }
    var HandlerUrl = "/Handlers/VillageWardsBySocietyId.ashx?DistrictID=" + DID + "&SocietyId=" + SID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill CardTypes Dropdown Method-------------------------//
function CardTypes(DropdownObject, IsFamily, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (IsFamily == undefined) {
        IsFamily = 0;
    }
    var HandlerUrl = "/Handlers/CardTypes.ashx?IsFamily=" + IsFamily;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Gadna Blocks Dropdown Method-------------------------//
function GadnaBlocks(DropdownObject, GZID, VWID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (GZID == undefined) {
        GZID = 0;
    }
    if (VWID == undefined) {
        VWID = 0;
    }
    var HandlerUrl = "/Handlers/GadnaBlocks.ashx?GpZoneId=" + GZID + "&VWID=" + VWID; ;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Relation Dropdown Method-------------------------//
function Relations(DropdownObject, IsMale, FID, MID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (IsMale == undefined) {
        IsMale = 0;
    }
    if (FID == undefined) {
        FID = 0;
    }
    if (MID == undefined) {
        MID = 0;
    }
    var HandlerUrl = "/Handlers/Relations.ashx?IsMale=" + IsMale + "&FID=" + FID + "&MID=" + MID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Fill Relation By MemberID Dropdown Method-------------------------//
function RelationsByMID(DropdownObject, MID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (MID == undefined) {
        MID = 0;
    }
    var HandlerUrl = "/Handlers/RelationByMID.ashx?MID=" + MID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//------------------Sub_Schemes_By_DprtID_Handler-------------------------//
function Sub_Schemes_By_DprtID_Handler(DropdownObject, DprtID, valueToBeSelect) {
    if (valueToBeSelect == undefined) {
        valueToBeSelect = 0;
    }
    if (DprtID == undefined) {
        DprtID = 0;
    }
    var HandlerUrl = "/Handlers/Sub_Schemes_By_DprtID_Handler.ashx?DprtID=" + DprtID;
    FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
}
//-------------------Common Base Method For reusability---------------------------------------------------//
function FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect, lable) {
    $("#dvLoading").show();
    DropdownObject.empty();
    DropdownObject.append("<option value='0'>Loading...</option>");
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        url: HandlerUrl,
        dataType: "json",
        error: function (data, textStatus) {
        },
        success: function (data) {
            var ins = data;
            DropdownObject.empty();
            DropdownObject.append("<option value='0'>- Select -</option>");
            $.each(ins.rows, function (i, item) {
                DropdownObject.append('<option  value="' + item[0] + '"> ' + item[1] + '</option>');
            });
        },
        complete: function () {
            $("#dvLoading").hide();
            DropdownObject.val(valueToBeSelect);
            if (lable != undefined) {
                lable.text(DropdownObject.find('option:selected').text());
                if (DropdownObject.val() == 0) {
                    lable.text('NA');
                }
            }
        }
    });
}
    //--------Fill VillageWards by janpadpanchayat -//
    function VillageWardsjanpadpanchayatWise(DropdownObject, GPZONEID, valueToBeSelect) {

        if (valueToBeSelect == undefined) {
            valueToBeSelect = 0;
        }
        if (GPZONEID == undefined) {
            GPZONEID = 0;
        }
        var HandlerUrl = "/Handlers/VillageWardsjanpadpanchayatWise.ashx?GPZONEID=" + GPZONEID;
        FillDropdown(HandlerUrl, DropdownObject, valueToBeSelect);
    }
//------------------------------------------------------------------------------------------------------------//
