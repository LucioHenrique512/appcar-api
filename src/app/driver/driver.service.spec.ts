import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverEntity } from './driver.entity';
import { DriverService } from './driver.service';

describe('DriverService', () => {
  let driverService: DriverService;
  let driverRepository: Repository<DriverEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DriverService,
        {
          provide: getRepositoryToken(DriverEntity),
          useValue: {},
        },
      ],
    }).compile();

    driverService = module.get<DriverService>(DriverService);
    driverRepository = module.get(getRepositoryToken(DriverEntity));
  });

  it('should be defined', () => {
    expect(driverService).toBeDefined();
    expect(driverRepository).toBeDefined();
  });
});
