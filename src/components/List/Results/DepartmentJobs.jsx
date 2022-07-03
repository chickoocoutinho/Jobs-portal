import JobListing from "./JobListing";

const DepartmentJobs = ({ jobs }) => {
	return (
		<div className="department-jobs-container">
			{jobs.map((job) => (
				<JobListing
					key={job.id}
					id={job.id}
					title={job.title}
					type={job.type}
					department={job.department.title}
					location={job.location.title}
					applyUrl={job.applyUrl}
					hostedUrl={job.hostedUrl}
					slug={job.slug}
				/>
			))}
		</div>
	);
};

export default DepartmentJobs;
