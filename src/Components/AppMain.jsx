import React from 'react';
import { Container } from 'react-bootstrap';

import { AppHeader, AppFooter } from './AppLayout';
import KeplerTest from './KeplerTest';

function App() {
  return (
    <Container>
		<AppHeader/>

		<KeplerTest/>
		
		<section className="App-card rounded mt-1">
			<h3>About</h3>
			<p>See how New Zealanders travelled to their places of work and education according to the 2018 Census. Mapping out the population centers where most people live, work, and learn as well as those remote communities where a commute covers large distances.</p>
			<p>This interactive map is driven by <a href="https://docs.kepler.gl/docs/user-guides/g-interactions" target="_blank" rel="noopener noreferrer">kepler.gl</a> - a data-agnostic, high-performance web-based application for visual exploration of large-scale geolocation data sets built on top of <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer">Mapbox GL</a> and <a href="http://uber.github.io/deck.gl/#/" target="_blank" rel="noopener noreferrer">deck.gl</a>.</p>

			<h3 className="pt-3">Data</h3>
			<p>The statistics data driving this interactive map is sourced from the <a href="https://datafinder.stats.govt.nz/data/category/census/2018/commuter-view/" target="_blank" rel="noopener noreferrer">2018 Census Data</a> provided by <a href="https://datafinder.stats.govt.nz/" target="_blank" rel="noopener noreferrer">Statistics NZ</a> and the <a href="https://www.stats.govt.nz/tools/commuter-view" target="_blank" rel="noopener noreferrer">Commuter View</a></p>

			<h5 className="pt-2">From the CommuterView Glossary</h5>
			<div className="b-l-primary">
				<p><strong>Lives and works in area unit:</strong> number of employed people whose usual residence and workplace was in this area unit.</p>
				<p><strong>Commute in:</strong> number of employed people who gave a workplace address in this area unit, but who did not usually reside in this area unit.</p>
				<p><strong>Commute out:</strong> number of employed people who usually resided in this area unit, but gave a workplace address outside this area unit. </p>
				<p><strong>Employed:</strong> a person was employed if they were part of the working-age population (15 years and over) and if, during the week ended 5 March 2006 or 3 March 2013, they:</p>
				<ul>
					<li>worked for one hour or more for pay or profit in the context of an employee/employer relationship or self-employment, or</li>
					<li>worked without pay for one hour or more in work that contributed directly to the operation of a farm, business, or professional practice owned or operated by a relative, or</li>
					<li>had a job, but were not at work due to:
						<ul>
							<li>their illness or injury</li>
							<li>personal or family responsibilities</li>
							<li>bad weather or mechanical breakdown</li>
							<li>direct involvement in an industrial dispute</li>
							<li>being on leave or holiday.</li>
						</ul>
					</li>
				</ul>
				<p><strong>Main means of travel to work:</strong> the method an employed person in the working-age population (15 years and over) used to travel the longest distance to their place of employment on census day (eg by bicycle, bus, walking, or jogging).</p>
				<p>As this data relates to the main means of travel on census day, it does not necessarily indicate a person's usual mode of travel to work and it does not indicate the main means of travel to work for people who did not go to work on census day.</p>
				<p><strong>Usual residence:</strong> the address of the dwelling where a person considered themselves to usually reside.</p>
				<p className="text-muted">See <a href="http://www.stats.govt.nz/Census/2013-census/info-about-2013-census-data/information-by-variable.aspx" target="_blank" rel="noopener noreferrer">2013 Census information by variable</a> for more information.</p>
				<p><strong>Workplace address:</strong> the physical location of a workplace.</p>
				<p>Census data on workplace address relates to the workplace address for the main job held by the respondent. This is the job in which the respondent worked the most hours.</p>
				<p>Respondents who have no fixed workplace, such as milk vendors and sales representatives, were asked to state the address of the depot, headquarters, or reporting point from which they operate.</p>
				<p>Respondents who had no fixed workplace address at all were asked to respond that they had ‘no fixed workplace address’.
				</p>
				<p className="text-muted">See<a href="http://www.stats.govt.nz/Census/2013-census/info-about-2013-census-data/information-by-variable/workplace-address.aspx" target="_blank" rel="noopener noreferrer"> 2013 Census information by variable</a> for more information on workplace address.</p>
				<p><strong>The workplace address variable does not have a non-response category:</strong> Respondents who were employed but did not state a workplace address were classified as 'New Zealand not further defined'. Respondents who stated a workplace address that could not be coded were also classified as 'New Zealand not further defined'.</p>
				<p>For the 2013 Census, 8.5 percent of responses were coded to the 'New Zealand not further defined' category. Respondents who stated they work across multiple areas (eg builders) were coded to 'no fixed address'. In 2013, 0.4 percent of responses were coded to this category.</p>
				<p>Most of the problems with workplace address stemmed from coding issues. Sometimes these issues were caused by respondents supplying insufficient detail about their workplace address.</p>
				<p>Where possible, workplace addresses were coded using Statistics NZ's Business Frame. Sometimes regional offices were coded to head offices, but this issue was resolved for the majority of cases (as these occurred in Auckland, Wellington, and Christchurch), but there may be some cases when an apparent long-distance commute between other regional centres may be due to miscoding. This situation would also have occurred in previous censuses.</p>
				<p className="text-muted">See samples of dwelling and individual forms at <a href="www.stats.govt.nz/Census/2013-census/info-about-the-census/forms-guidenotes.aspx" target="_blank" rel="noopener noreferrer">2013 Census definitions and forms</a>.</p>
			</div>

			<h5 className="pt-2">2018 Census Main means of travel to education by Statistical Area 2</h5>
			<div className="b-l-primary">
				<p>The 2018 Census commuter view dataset contains the census usually resident population count who are studying, (part time or full time) by statistical area 2 for the main means of travel to education variable from the 2018 Census. The geography corresponds to 2018 boundaries.</p>
				<p> This dataset is the base data for the ‘There and back again: our daily commute’ competition.</p>
				<p>This 2018 Census commuter view dataset is displayed by statistical area 2 geography and contains from-to (journey) information on an individual’s usual residence and educational institution address* by main means of travel to education.</p>
				<p className="text-muted">* Educational institution address is coded from information supplied by respondents about where they study.</p>
				<p>Where respondents do not supply sufficient information, their responses are coded to ‘not further defined’. The 2018 Census commuter view datasets excludes these ‘not further defined’ areas, as such the sum of the counts for each region in this dataset may not be equal to the total employed census usually resident population count aged 15 years and over for that region.</p>
			</div>

			<h5 className="pt-2">2018 Census Main means of travel to work by Statistical Area 2</h5>
			<div className="b-l-primary">
				<p>The 2018 Census commuter view dataset contains the employed census usually resident population count aged 15 years and over by statistical area 2 for the main means of travel to work variable from the 2018 Census. The geography corresponds to 2018 boundaries.</p>
				<p> This dataset is the base data for the ‘There and back again: our daily commute’ competition.</p>
				<p>This 2018 Census commuter view dataset is displayed by statistical area 2 geography and contains from-to (journey) information on an individual's usual residence and workplace address* by main means of travel to work.</p>
				<p className="text-muted">* Workplace address is coded from information supplied by respondents about their workplaces.</p>
				<p>Where respondents do not supply sufficient information, their responses are coded to ‘not further defined’. The 2018 Census commuter view datasets excludes these ‘not further defined’ areas, as such the sum of the counts for each region in this dataset may not be equal to the total employed census usually resident population count aged 15 years and over for that region.</p>
			</div>
		</section>

		<AppFooter/>
    </Container>
  );
}

export default App;