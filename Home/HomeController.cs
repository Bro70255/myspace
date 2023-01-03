       public ActionResult NewScreen()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public JsonResult InsertStudDetails(DetailsModel Details) {
            try {
                StudDetailsBLL.InsertDetails(Details);
                return Json(1);
            } catch (Exception ex) { throw ex; }
        }

        public JsonResult GetStudDetails()
        {
            DataTable dtDetails = new DataTable();
            try
            {
                dtDetails = StudDetailsBLL.GetDetails();
                return Json(1);
            }
            catch (Exception ex) { throw ex; }

            string JsResult;
            JsResult = JsonConvert.SerializeObject(dtDetails);
            return Json(JsResult, JsonRequestBehavior.AllowGet);
        }
