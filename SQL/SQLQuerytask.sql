 SELECT 
 DEPTNO,SUM(SAL) TOTAL
 FROM EMP
 GROUP BY DEPTNO;
SELECT * FROM EMP;


SELECT
 MGR,AVG (SAL) AVERAGE
 FROM EMP 
 GROUP BY MGR;
SELECT * FROM EMP;


SELECT 
SUM(SAL) SALARY
FROM EMP
WHERE JOB='SALESMAN' ;


SELECT MAX(SAL) HIGHESTSAL
FROM EMP;


SELECT MAX(COMM) HIGHCOMISSON
FROM EMP;
