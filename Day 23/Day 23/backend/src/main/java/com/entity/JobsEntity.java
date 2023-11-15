package com.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "jobs")
public class JobsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String location;

    public JobsEntity() {
    }

    public JobsEntity(String title, String description, String location) {
        this.title = title;
        this.description = description;
        this.location = location;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

	/* Container for the entire JobList page */
	.job-list-container {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  background-color: #f0f0f0;
	  padding: 20px;
	}
	
	/* Job list styles */
	.job-list {
	  width: 80%;
	  background-color: #fff;
	  border: 1px solid #ccc;
	  border-radius: 5px;
	  padding: 20px;
	  margin: 20px;
	  text-align: center;
	  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	}
	
	/* Heading for the job list */
	.job-list h2 {
	  font-size: 24px;
	  margin: 0;
	}
	
	/* Individual job item styles */
	.job-item {
	  margin: 20px 0;
	  padding: 20px;
	  border: 1px solid #ccc;
	  border-radius: 5px;
	  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
	  transition: transform 0.2s;
	}
	
	/* Job title style */
	.job-title {
	  font-size: 20px;
	  font-weight: bold;
	}
	
	/* Job description style */
	.job-description {
	  font-size: 16px;
	  margin-top: 10px;
	}
	
	/* Job location style */
	.job-location {
	  font-size: 16px;
	  margin-top: 10px;
	}
	
	/* Separator line */
	.job-item hr {
	  margin: 20px 0;
	  border: 0;
	  border-top: 1px solid #ccc;
	}
	
	/* Link to the post job page */
	.search {
	  background-color: #007bff;
	  color: #fff;
	  padd ing: 10px 20px;
	  border: none;
	  border-radius: 5px;
	  text-decoration: none;
	  cursor: pointer;
	  font-size: 16px;
	}
	
	/* Media query for mobile responsiveness */
	@media (max-width: 768px) {
	  /* Add your mobile responsiveness styles here */
	}
	
}