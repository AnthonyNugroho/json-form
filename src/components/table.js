

const forms = {

    101:{
		id : 101,
		fieldName : "nick_name",
		fieldLabel : "Nama Panggilan",
		formType : "TEXT",
	},

	102:{
  		id : 102,
  		fieldName : "marital_status",
  		fieldLabel : "Status Pernikahan",
  		formType : "DROP_DOWN",
  		formData : {
  			selection : [
			{
				label:"Pilih",
				value:null
 		  },
			{
  				label : "Belum Menikah",
  				value : "Belum Menikah",
			},
			{
				label : "Menikah",
				value : "Menikah",
			},
			{
				label : "Janda / Duda",
				value : "Janda / Duda",
			}],
		},
	},

	103:{
		id : 103,
		fieldName : "religion",
		fieldLabel : "Agama",
		formType : "DROP_DOWN",
		formData : {
			selection : [
			{
				label:"Pilih",
				value:null
			},
			{
				label : "Katolik",
				value : "Katolik",
			},
			{
				label : "Kristen",
				value : "Kristen",
			},
			{
				label : "Islam",
				value : "Islam",
			},
			{
				label : "Budha",
				value : "Budha",
			},
			{
				label : "Hindu",
				value : "Hindu",
			}],
		},
	},

	104:{
		id : 104,
		fieldName : "education",
		fieldLabel : "Pendidikan Terakhir",
		formType : "DROP_DOWN",
		formData : {
			selection : [
			{
				label:"Pilih",
				value:null
			},
			{
				label : "SD",
				value : "SD",
			},
			{
				label : "SMP",
				value : "SMP",
			},
			{
				label : "SMA / Sederajat",
				value : "SMA / Sederajat",
			},
			{
				label : "Akademi / Diploma",
				value : "Akademi / Diploma",
			},
			{
				label : "S1",
				value : "S1",
			},
			{
				label : "S2",
				value : "S2",
			},
			{
				label : "S3",
				value : "S3",
			}]
		},
	},

	105:{
		id : 105,
		fieldName : "mother_maiden_name",
		fieldLabel : "Nama Gadis Ibu Kandung",
		formType : "TEXT",
	},

	106:{
		id : 106,
		fieldName : "home_address_postcode",
		fieldLabel : "Kode Pos",
		formType : "TEXT",
	},

	107:{
		id : 107,
		fieldName : "ktp_address_rt",
		fieldLabel : "RT",
		formType : "TEXT",

	},

	108:{
		id : 108,
		fieldName : "ktp_address_rw",
		fieldLabel : "RW",
		formType : "TEXT",
	},

	109:{
		id : 109,
		fieldName : "home_ownership",
		fieldLabel : "Status Kepemilikan Rumah",
		formType : "DROP_DOWN",
		formData : {
			selection : [
			{
				label:"Pilih",
				value:null
			},		
			{
				label : "Milik sendiri / pasangan",
				value : "Milik sendiri / pasangan",
			},
			{
				label : "Milik orang tua / anak / keluarga",
				value : "Milik orang tua / anak / keluarga",
			},
			{
				label : "Mengontrak / pihak ke-3",
				value : "Mengontrak / pihak ke-3",
			}]
		}
	},

	201:{
		id : 201,
		fieldName : "spouse_name",
		fieldLabel : "Nama Pasangan",
		formType : "TEXT",
	},

	202:{
		id : 202,
		fieldName : "spouse_ktp_number",
		fieldLabel : "No KTP Pasangan",
		formType : "TEXT",
	},

	203:{
		id : 203,
		fieldName : "spouse_birth_date",
		fieldLabel : "Tanggal Lahir Pasangan",
		formType : "TEXT",
	},

	204:{
		id : 204,
		fieldName : "spouse_birth_place",
		fieldLabel : "Tempat Lahir Pasangan",
		formType : "TEXT",
	},

	205:{
		id : 205,
		fieldName : "spouse_occupation",
		fieldLabel : "Pekerjaan Pasangan",
		formType : "DROP_DOWN",
		formData : {
			selection: [
			{
				label:"Pilih",
				value:null
			},
			{
				label : "Wiraswasta",
				value : "Wiraswasta",
			},
			{
				label : "Karyawan",
				value : "Karyawan",
			},
			{
				label : "Musiman",
				value : "Musiman",
			},
			{
				label : "Tidak Bekerja",
				value : "Tidak Bekerja",
			}]
		}
	},

	301:{
		id : 301,
		fieldName : "commodity_name",
		fieldLabel : "Pilih Komoditas",
		formType : "DROP_DOWN",
		formData : {
			selection : [
			{
				label:"Pilih",
				value:null
			},
			{
				label : "Pertanian Padi",
				value : "Pertanian Padi",
			},
			{
				label : "pertanian Jagung",
				value : "pertanian Jagung",
			},
			{
				label : "Lainnya",
				value : "Lainnya",
			}]
		}
	},

	302:{
		id : 302,
		fieldName : "fieldType",
		fieldLabel : "Pengairan Lahan",
		formType : "TEXT",
	},

	303:{
		id : 303,
		fieldName : "seed_price",
		fieldLabel : "Harga Benih (/Kg)",
		formType : "TEXT",
	},

	304:{
		id : 304,
		fieldName : "seed_sow_date",
		fieldLabel : "Tanggal Semai",
		formType : "TEXT",
	},

	305:{
		id : 305,
		fieldName : "seedling_sow_date",
		fieldLabel : "Tanggal Tanam",
		formType : "TEXT",
	},

	306:{
		id : 306,
		fieldName : "havest_production",
		fieldLabel : "Perkiraan Hasil Panen (Kg)",
		formType : "TEXT",
	},

	307:{
		id : 307,
		fieldName : "harvest_price",
		fieldLabel : "Perkiraan Harga Jual (Rp/Kg)",
		formType : "TEXT",
	},

	308:{
		id : 308,
		fieldName : "crop_cycle_length",
		fieldLabel : "Jumlah Siklus Setiap Panen",
		formType : "TEXT",
	},

	401:{
		id : 401,
		fieldName : "field_ownership_type",
		fieldLabel : "Pemilik Lahan / Penggarap",
		formType : "DROP_DOWN",
		formData : {
			selection : [
			{
				label:"Pilih",
				value:null
			},
			{
				label : "Pemilik Lahan",
				value : "Pemilik Lahan",
			},
			{
				label : "Pengggarap",
				value : "Pengggarap",
			}]
		}
	},

	402:{
		id : 402,
		fieldName : "bussines_ownership_type",
		fieldLabel : "Kepemilikan Usaha",
		formType : "DROP_DOWN",
		formData : {
			selection : [
			{
				label:"Pilih",
				value:null
			},	
			{
				label : "Milik sendiri / pasagan",
				value : "Milik sendiri / pasagan",
			},
			{
				label : "Milik orang tua / anak /  keluarga",
				value : "Milik orang tua / anak /  keluarga",
			},
			{
				label : "Mengontrak / pihak ke-3",
				value : "Mengontrak / pihak ke-3",
			}],
		},
	},

	403:{
		id : 403,
		fieldName : "bussines_capital",
		question : "test1",
		fieldLabel : "Modal Usaha (Rp)",
		formType : "TEXT",
	},

	404:{
		id : 404,
		fieldName : "field_rent_type",
		fieldLabel : "test2",
		formType : "RADIO_BUTTON",
		child:[405,406],
		formData : {
			selection : [{
				label : "Ya",
				value : "ya",
			},
			{
				label : "Tidak",
				value : "tidak",
			}]
		}

	},

	405:{
		id : 405,
		fieldName : "field_rent_cost",
		fieldLabel : "Biaya Sewa Lahan (Rp)",
		formType : "TEXT",
		dependsOn : 404,
		expectedValue:"ya"
	},

	406:{
		id : 406,
		fieldName : "business_capital",
		fieldLabel : "Biaya Tanpa Sewa Lahan (Rp)",
		formType : "TEXT",
		dependsOn : 404,
		expectedValue : "ya"
	},

	407:{
		id : 407,
		fieldName : "business_year",
		fieldLabel : "Tahun" ,
		formType: "TEXT",
	},

	408:{
		id : 408,
		fieldName : "business_month",
		fieldLabel : "Bulan",
		formType : "TEXT",

	},

	409:{
		id : 409,
		fieldName : "npwp_number",
		fieldLabel : "test3",
		formType : "TEXT",
	},

	501:{
		id : 501,
		fieldName : "other_loan_nonbank",
		fieldLabel :"test4",
		formType : "RADIO_BUTTON",
		child:[502],
		formData : {
			selection : [{
				label : "Ya",
				value : "ya",
			},
			{
				label : "Tidak",
				value : "tidak"
			}]
		},
		conditionValue: 'YA'
	},

	502:{
		id : 502,
		fieldName : "other_loan_bank",
		fieldLabel : "test5",
		formType : "RADIO_BUTTON",
		dependsOn : 501,
		child:[503],
		expectedValue:"ya",
		formData : {
			selection : [{
				label : "Ya",
				value : "ya",
			},
			{
				label : "Tidak",
				value : "tidak",
			}]
		}
	},

	503:{
		id : 503,
		fieldName : "savings_ownership",
		fieldLabel : "test6",
		formType : "RADIO_BUTTON",
		dependsOn : 502,
		child:[504],
		expectedValue:"ya",
		formData : {
			selection : [{
				label : "Ya",
				value : "ya",
			},
			{
				label : "Tidak",
				value : "tidak",
			}]
		}
	},

	504:{
		id : 504,
		fieldName : "savings_institution",
		fieldLabel : "test7",
		formType : "RADIO_BUTTON",
		dependsOn : 503,
		expectedValue:"ya",
		formData : {
			selection : [{
				label : "Bank",
				value : "Bank",
			},
			{
				label : "Non-Bank",
				value : "Non-Bank",
			}]
		}

	},

	505:{
		id : 505,
		fieldName : "monthly_expense_private",
		fieldLabel : "test8",
		formType : "TEXT",
	},

	506:{
		id : 506,
		fieldName : "other_income_source",
		fieldLabel : "test9",
		formType : "RADIO_BUTTON",
		formData : {
			selection : [{
				label : "Ya",
				value : "ya",
			},
			{
				label : "Tidak",
				value : "tidak",
			}]
		}

	},

	507:{
		id : 507,
		fieldName : "", //<<<<<<<<<<<<-------------------------------------
		fieldLabel : "Jenis Pekerjaan",
		formType : "TEXT",
	},

	508:{
		id : 508,
		fieldName : "other_income_amount",
		fieldLabel : "Jumlah Pendapatan per bulan",
		formType : "TEXT",
	},

	601:{
		id : 601,
		fieldName : "", //<<<<<<<<<-----------------------------------------
		fieldLabel : "Nama Bank",
		formType : "TEXT",
	},

	602:{
		id : 602,
		fieldName : "", //<<<<<<<<<-----------------------------------------
		fieldLabel : "Nama Pemilik Rekening",
		formType : "TEXT"
	},

	603:{
		id : 603,
		fieldName : "", //<<<<<<<<<-----------------------------------------
		fieldLabel : "Nomor Rekening",
		formType : "TEXT"
	},

	604:{
		id : 604,
		fieldName : "", //<<<<<<<<<-----------------------------------------
		fieldLabel : "Cabang",
		formType : "TEXT"
	},


};

export default forms
