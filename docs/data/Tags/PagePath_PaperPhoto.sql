SELECT *
FROM PagePath_TagName
FULL OUTER JOIN PaperPhoto_TagName ON PagePath_TagName.TagName=PaperPhoto_TagName.TagName
ORDER BY PagePath_TagName.PagePath